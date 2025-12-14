import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ProjectForm from "@/app/admin/_components/project-form";
import { Button } from "@/components/ui/button";

export default function AddProjectModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className={"cursor-pointer bg-[#122866] hover:bg-[#122866]/75"}>
          Add project
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add project</DialogTitle>
          <DialogDescription />
        </DialogHeader>
        <ProjectForm />
      </DialogContent>
    </Dialog>
  );
}
