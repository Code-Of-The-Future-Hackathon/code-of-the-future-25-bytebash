import { Trash2 } from "lucide-react";
import { toast } from "sonner";
import { useDeleteAbsenteeMutation } from "~/hooks/api/absentee/use-delete-absentee-mutation";
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

type AbsenteerDeleteAlertProps = {
  id: string;
};
export default function AbsenteerDeleteAlert({
  id,
}: AbsenteerDeleteAlertProps) {
  const { mutateAsync: doDelete } = useDeleteAbsenteeMutation({ id });

  async function onSubmit() {
    const toastId = toast.loading("Deleting Absentee...");

    doDelete()
      .then(() => {
        toast.success("Absentee Deleted!", {
          id: toastId,
        });
      })
      .catch(() => {
        toast.error("Failed to delete absentee!", {
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
            absentee.
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
