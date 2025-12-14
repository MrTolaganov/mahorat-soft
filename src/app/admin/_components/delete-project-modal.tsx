"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Project } from "@/drizzle/schemas/project.schema";
import { useState } from "react";
import { deleteProject } from "@/actions/project.action";
import { toast } from "sonner";

interface AlertDialogModalProps {
  deletedProject: Project | null;
  setDeletedProject: (deletedProject: Project | null) => void;
}

export default function DeleteProjectModal({
  deletedProject,
  setDeletedProject,
}: AlertDialogModalProps) {
  const [isLoading, setIsLoading] = useState(false);

  const onDeleteProject = async () => {
    try {
      if (!deletedProject) return;

      setIsLoading(true);
      await deleteProject(deletedProject.id!);
      toast.success("Project deleted successfully.");
      setDeletedProject(null);
    } catch {
      toast.error("Something went wrong.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AlertDialog
      open={!!deletedProject}
      onOpenChange={() => setDeletedProject(null)}
    >
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Are you absolutely sure to delete this {deletedProject?.title}{" "}
            project ?
          </AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel
            disabled={isLoading}
            className={"hover:bg-background cursor-pointer"}
          >
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            disabled={isLoading}
            onClick={onDeleteProject}
            className={"bg-destructive hover:bg-destructive cursor-pointer"}
          >
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
