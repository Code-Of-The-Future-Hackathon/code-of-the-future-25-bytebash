import { Trash2 } from "lucide-react";
import { toast } from "sonner";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "~/components/ui/alert-dialog";
import { Button } from "~/components/ui/button";
import { useDeleteComputerMutation } from "~/hooks/api/computers/use-delete-computer-mutation";

type ComputerDeleteAlertProps = {
  id: string;
};
export default function ComputerDeleteAlert({ id }: ComputerDeleteAlertProps) {
  const { mutateAsync: doDelete } = useDeleteComputerMutation({ id });

  async function onSubmit() {
    const toastId = toast.loading("Deleting Computer...");

    doDelete()
      .then(() => {
        toast.success("Computer Deleted!", {
          id: toastId,
        });
      })
      .catch(() => {
        toast.error("Failed to delete computer!", {
          id: toastId,
        });
      });
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive" className="size-8">
          <Trash2 className="size-full" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            computer.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction className="bg-destructive" onClick={onSubmit}>
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
