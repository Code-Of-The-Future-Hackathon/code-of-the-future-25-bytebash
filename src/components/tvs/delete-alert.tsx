import { Trash2 } from "lucide-react";
import { toast } from "sonner";
import { useDeleteTvMutation } from "~/hooks/api/tv/use-delete-tv-mutation";
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

type TvDeleteAlertProps = {
  id: string;
};
export default function TvDeleteAlert({ id }: TvDeleteAlertProps) {
  const { mutateAsync: doDelete } = useDeleteTvMutation({ id });

  async function onSubmit() {
    const toastId = toast.loading("Deleting Tv...");
    doDelete()
      .then(() => {
        toast.success("Tv Deleted!", {
          id: toastId,
        });
      })
      .catch(() => {
        toast.error("Failed to delete tv!", {
          id: toastId,
        });
      });
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger className="rounded bg-red-500 px-3 py-2 text-secondary">
        <Trash2 />
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction className="bg-red-500" onClick={onSubmit}>
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
