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
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { todoActions } from "@/store";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { ToastDemo } from "./ToastDemo";

export function AlertDialogDemo({ children, todo }) {
  const dispatch = useDispatch();
  const [success, setSuccess] = useState(false);

  const removeTodo = () => {
    setSuccess(true);
    dispatch(todoActions.removeTodo(todo));
    // setTimeout(() => {
    //   setSuccess(false);
    // }, 300);
  };

  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="outline">{children}</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Todoyu silmek istediğinize emin misiniz?
            </AlertDialogTitle>
            <AlertDialogDescription>
              Todonuz sonsuze kadar silenecektir.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={removeTodo}>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {success && (
        <ToastDemo
          description="Todo Başarıyla Silindi!"
          title="Todo Silindi"
        ></ToastDemo>
      )}
    </>
  );
}
