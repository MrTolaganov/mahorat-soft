"use client";

import { useForm } from "react-hook-form";
import { ProjectFormSchema } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { projectFormSchema } from "@/lib/validations";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChangeEvent, useRef, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import InputField from "@/app/admin/_components/input-field";
import TextareaField from "@/app/admin/_components/textarea-field";
import { addProject, editProject } from "@/actions/project.action";
import { deleteFile, uploadFile } from "@/actions/file.action";
import { toast } from "sonner";
import { DialogClose } from "@/components/ui/dialog";
import { Project } from "@/drizzle/schemas/project.schema";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface ProjectFormProps {
  project?: Project;
  setEditedProject?: (project: Project | null) => void;
}

export default function ProjectForm({
  project,
  setEditedProject,
}: ProjectFormProps) {
  const projectForm = useForm<ProjectFormSchema>({
    resolver: zodResolver(projectFormSchema),
    defaultValues: {
      title: project?.title ?? "",
      description: project?.description ?? "",
    },
  });

  const [isUploading, setIsUploading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState(project?.image ?? "");
  const [errorMessage, setErrorMessage] = useState("");

  const [featured, setFeatured] = useState(project?.featured ?? false);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const dialogCloseRef = useRef<HTMLButtonElement>(null);

  const isSubmitting = projectForm.formState.isSubmitting;

  const onUploadFile = async (event: ChangeEvent<HTMLInputElement>) => {
    try {
      setIsUploading(true);
      const file = event.target.files?.[0];
      if (file) {
        const url = await uploadFile(file);
        setPreviewUrl(url);
      }
    } catch {
      toast.error("Something went wrong");
    } finally {
      setIsUploading(false);
    }
  };

  const onRemoveFile = async () => {
    try {
      setIsUploading(true);
      await deleteFile(previewUrl);
      setPreviewUrl("");
    } catch {
      toast.error("Something went wrong");
    } finally {
      setIsUploading(false);
    }
  };

  const onProjectFormSubmit = async (values: ProjectFormSchema) => {
    try {
      if (!previewUrl) {
        setErrorMessage("Image is required");
        return;
      }

      if (project && setEditedProject) {
        await editProject({
          ...values,
          image: previewUrl,
          id: project.id,
          featured,
        });

        setEditedProject(null);
        toast.success("Project edited successfully.");
      } else {
        await addProject({ ...values, image: previewUrl });
        dialogCloseRef.current?.click();
        setPreviewUrl("");
        toast.success("Project added successfully.");
      }

      projectForm.reset();
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <Form {...projectForm}>
        <form
          onSubmit={projectForm.handleSubmit(onProjectFormSubmit)}
          className={"space-y-6"}
        >
          <InputField
            name={"title"}
            control={projectForm.control}
            placeholder={"Enter project title"}
            disabled={isSubmitting}
          />

          <TextareaField
            name={"description"}
            control={projectForm.control}
            placeholder={"Enter project description"}
            disabled={isSubmitting}
          />

          <div>
            <div
              className={cn(
                "relative h-48 w-full flex items-center justify-center bg-gray-200 rounded-md ",
                errorMessage && "border border-destructive",
              )}
              onClick={
                previewUrl ? () => {} : () => fileInputRef.current?.click()
              }
            >
              {previewUrl ? (
                <>
                  <Button
                    type={"button"}
                    size={"icon"}
                    variant={"ghost"}
                    className="absolute top-0 right-0 z-20 hover:bg-transparent"
                    onClick={onRemoveFile}
                  >
                    <X />
                  </Button>
                  <Image
                    src={previewUrl}
                    alt={"Project tile"}
                    fill
                    className="object-fit rounded-md"
                  />
                </>
              ) : (
                <p className={"text-muted-foreground"}>Choose image file</p>
              )}
            </div>
            {errorMessage && (
              <p className={"text-destructive text-xs"}>{errorMessage}</p>
            )}
          </div>
          {project && (
            <div className={"flex items-center space-x-2"}>
              <Checkbox
                id={"featured"}
                checked={featured}
                onCheckedChange={(checked) => setFeatured(!!checked)}
              />
              <Label
                htmlFor={"featured"}
                className={"text-base text-muted-foreground"}
              >
                Is it featured project?
              </Label>
            </div>
          )}

          <Button
            disabled={isSubmitting || isUploading}
            className="bg-[#122866] w-full text-base h-10 hover:bg-[#122866]/75 cursor-pointer"
          >
            Submit
          </Button>
          <DialogClose ref={dialogCloseRef} className={"hidden"} />
        </form>
      </Form>

      <Input
        ref={fileInputRef}
        type={"file"}
        accept={"image/*"}
        className={"hidden"}
        onChange={async (event) => await onUploadFile(event)}
      />
    </>
  );
}
