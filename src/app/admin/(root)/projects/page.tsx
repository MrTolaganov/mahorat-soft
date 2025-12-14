import { getAllProjects } from "@/actions/project.action";
import ProjectsList from "@/app/admin/_components/projects-list";
import AddProjectModal from "@/app/admin/_components/add-project-modal";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mahorat Soft | Projects",
};

export default async function ProjectsPage() {
  let allProjects = [];
  
  try {
    allProjects = await getAllProjects();
  } catch (error) {
    console.error("Error fetching projects:", error);
  }

  return (
    <div>
      <div className="w-full flex justify-between items-center px-4 md:px-8 mt-4 md:mt-6">
        <h3 className={"text-2xl"}>All Projects</h3>
        <AddProjectModal />
      </div>

      <ProjectsList projects={allProjects} />
    </div>
  );
}
