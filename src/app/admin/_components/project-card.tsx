import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Project } from "@/drizzle/schemas/project.schema";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  project: Project;
  setEditedProject?: (project: Project) => void;
  setDeletedProject?: (project: Project) => void;
}

export default function ProjectCard({
  project,
  setEditedProject,
  setDeletedProject,
}: ProjectCardProps) {
  return (
    <Card>
      <CardContent>
        <div className={"relative h-48"}>
          <Image
            src={project.image}
            alt={project.title}
            fill
            className={"object-fit rounded-t-xl"}
          />
        </div>

        <div className={"p-3"}>
          <CardTitle className={"text-xl line-clamp-1"}>
            {project.title}
          </CardTitle>
          <CardDescription className={"text-base line-clamp-3"}>
            {project.description}
          </CardDescription>
        </div>
        {setEditedProject && setDeletedProject && (
          <div className={"grid grid-cols-2 gap-2 px-3 mb-3"}>
            <Button
              size={"sm"}
              variant={"outline"}
              className="w-full border-[#122866] text-[#122866] hover:text-[#122866] hover:bg-background cursor-pointer"
              onClick={() => setEditedProject(project)}
            >
              Edit
            </Button>
            <Button
              size={"sm"}
              variant={"outline"}
              className="w-full border-destructive text-destructive hover:text-destructive hover:bg-background cursor-pointer"
              onClick={() => setDeletedProject(project)}
            >
              Delete
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
