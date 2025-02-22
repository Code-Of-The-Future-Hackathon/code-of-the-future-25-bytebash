import { Trash2 } from "lucide-react";
import { toast } from "sonner";
import { useDeleteNetworkMutation } from "~/hooks/api/networks/use-delete-network-mutation";
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

type NetworkDeleteAlertProps = {
  id: string;
};
export default function NetworkDeleteAlert({ id }: NetworkDeleteAlertProps) {
  const { mutateAsync: doDelete } = useDeleteNetworkMutation({ id });

  async function onSubmit() {
    const toastId = toast.loading("Deleting Network...");
    doDelete()
      .then(() => {
        toast.success("Network Deleted!", {
          id: toastId,
        });
      })
      .catch(() => {
        toast.error("Failed to delete network!", {
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
            network.
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
