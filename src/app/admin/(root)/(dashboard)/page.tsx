import { Button } from "@/components/ui/button";
import Link from "next/link";
import ProjectCard from "@/app/admin/_components/project-card";
import { getFeaturedProjects } from "@/actions/project.action";
import { Metadata } from "next";
import { Project } from "@/drizzle/schemas/project.schema";

export const metadata: Metadata = {
  title: "Mahorat Soft | Dashboard",
};

export default async function AdminDashboardPage() {
  let featuredProjects: Project[] = [];
  
  try {
    featuredProjects = await getFeaturedProjects();
  } catch (error) {
    console.error("Error fetching featured projects:", error);
  }

  return (
    <div>
      <div className="w-full flex justify-between items-center px-4 md:px-8 mt-4 md:mt-6">
        <h3 className={"text-2xl"}>Featured Projects</h3>
        <Button
          asChild
          className={"cursor-pointer bg-[#122866] hover:bg-[#122866]/75"}
        >
          <Link href={"/admin/projects"}>See all</Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-8 mt-4 md:mt-6">
        {featuredProjects.length > 0 ? (
          featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))
        ) : (
          <p className="col-span-1 md:col-span-2 lg:col-span-3 text-center text-lg text-muted-foreground mt-4">
            No projects found
          </p>
        )}
      </div>
    </div>
  );
}
