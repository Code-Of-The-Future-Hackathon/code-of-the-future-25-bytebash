import { Trash2 } from "lucide-react";
import { toast } from "sonner";
import { useDeleteLampMutation } from "~/hooks/api/lamps/use-delete-lamps-mutation";
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
} from "../ui/alert-dialog";
import { Button } from "../ui/button";

type LampDeleteAlertProps = {
  id: string;
};
export default function LampDeleteAlert({ id }: LampDeleteAlertProps) {
  const { mutateAsync: doDelete } = useDeleteLampMutation({ id });

  async function onSubmit() {
    const toastId = toast.loading("Deleting Lamp...");
    doDelete()
      .then(() => {
        toast.success("Lamp Deleted!", {
          id: toastId,
        });
      })
      .catch(() => {
        toast.error("Failed to delete lamp!", {
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
            lamp.
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
