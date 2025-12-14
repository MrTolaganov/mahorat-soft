"use client";

import ProjectCard from "@/app/admin/_components/project-card";
import { Project } from "@/drizzle/schemas/project.schema";
import { useState } from "react";
import EditProjectModal from "@/app/admin/_components/edit-project-modal";
import DeleteProjectModal from "@/app/admin/_components/delete-project-modal";

interface ProjectsListProps {
  projects: Project[];
}

export default function ProjectsList({ projects }: ProjectsListProps) {
  const [editedProject, setEditedProject] = useState<Project | null>(null);
  const [deletedProject, setDeletedProject] = useState<Project | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-8 mt-4 md:mt-6">
      {projects.length > 0 ? (
        projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            setEditedProject={setEditedProject}
            setDeletedProject={setDeletedProject}
          />
        ))
      ) : (
        <p className="col-span-1 md:col-span-2 lg:col-span-3 text-center text-lg text-muted-foreground mt-4">
          No projects found
        </p>
      )}

      {editedProject && (
        <EditProjectModal
          editedProject={editedProject}
          setEditedProject={setEditedProject}
        />
      )}

      {deletedProject && (
        <DeleteProjectModal
          deletedProject={deletedProject}
          setDeletedProject={setDeletedProject}
        />
      )}
    </div>
  );
}
