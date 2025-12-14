import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import ProjectForm from "@/app/admin/_components/project-form";
import { Project } from "@/drizzle/schemas/project.schema";

interface EditProjectModalProps {
  editedProject: Project | null;
  setEditedProject: (project: Project | null) => void;
}

export default function EditProjectModal({
  editedProject,
  setEditedProject,
}: EditProjectModalProps) {
  return (
    <Dialog open={!!editedProject} onOpenChange={() => setEditedProject(null)}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit project</DialogTitle>
          <DialogDescription />
        </DialogHeader>
        {editedProject && (
          <ProjectForm
            project={editedProject}
            setEditedProject={setEditedProject}
          />
        )}
      </DialogContent>
    </Dialog>
  );
}
