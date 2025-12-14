"use server";

import { ProjectData, projectsTable } from "@/drizzle/schemas/project.schema";
import { db } from "@/drizzle";
import { getCurrentUser } from "@/actions/auth.action";
import { revalidatePath } from "next/cache";
import { eq } from "drizzle-orm";

export async function addProject(
  projectData: Pick<ProjectData, "title" | "description" | "image">,
) {
  const currentUser = await getCurrentUser();

  if (!currentUser) throw new Error("Current user does not exist");

  await db
    .insert(projectsTable)
    .values({ ...projectData, userId: currentUser.id });

  revalidatePath("/admin/projects", "page");
}

export async function getAllProjects() {
  return db.select().from(projectsTable);
}

export async function editProject(
  projectData: Pick<
    ProjectData,
    "id" | "title" | "description" | "image" | "featured"
  >,
) {
  // Only check featured limit if trying to set project as featured
  if (projectData.featured) {
    const featuredProjects = await db
      .select()
      .from(projectsTable)
      .where(eq(projectsTable.featured, true));

    // Exclude current project from count if it's already featured
    const currentProject = await db
      .select()
      .from(projectsTable)
      .where(eq(projectsTable.id, projectData.id!))
      .limit(1);

    const isCurrentlyFeatured = currentProject[0]?.featured;
    const featuredCount = isCurrentlyFeatured
      ? featuredProjects.length
      : featuredProjects.length + 1;

    if (featuredCount > 6)
      throw new Error("Featured projects limit exceeded (max 6)");
  }

  await db
    .update(projectsTable)
    .set({
      title: projectData.title,
      description: projectData.description,
      image: projectData.image,
      featured: projectData.featured,
    })
    .where(eq(projectsTable.id, projectData.id!));

  revalidatePath("/admin/projects", "page");
  revalidatePath("/", "page"); // Revalidate home page since featured projects are shown there
}

export async function deleteProject(projectId: string) {
  await db.delete(projectsTable).where(eq(projectsTable.id, projectId));
  revalidatePath("/admin/projects", "page");
  revalidatePath("/", "page"); // Revalidate home page since featured projects are shown there
}

export async function getFeaturedProjects() {
  return db
    .select()
    .from(projectsTable)
    .where(eq(projectsTable.featured, true));
}
