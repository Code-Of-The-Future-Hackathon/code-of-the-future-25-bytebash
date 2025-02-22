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
import { useDeleteEquipmentMutation } from "~/hooks/api/equipment/use-delete-equipment-mutation";
import { Button } from "../ui/button";

type EquipmentDeleteAlertProps = {
  id: string;
};
export default function EquipmentDeleteAlert({
  id,
}: EquipmentDeleteAlertProps) {
  const { mutateAsync: doDelete } = useDeleteEquipmentMutation({ id });

  async function onSubmit() {
    const toastId = toast.loading("Deleting Equipment...");
    doDelete()
      .then(() => {
        toast.success("Equipment Deleted!", {
          id: toastId,
        });
      })
      .catch(() => {
        toast.error("Failed to delete equipment!", {
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
            equipment.
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
