import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogClose,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ToastDemo } from "./ToastDemo";
import { useDispatch } from "react-redux";
import { todoActions } from "@/store";

export function DialogDemo({ children, todo }) {
  const [message, setMessage] = useState(null);
  const dispatch = useDispatch();

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setMessage(true);
    setTimeout(() => {
      setMessage(false);
    }, 100);
    const updateTodo = { todo: null, id: null };
    updateTodo.todo = watch("new-todo");
    updateTodo.id = todo.id;
    dispatch(todoActions.editTodo(updateTodo));
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">{children}</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Edit todo</DialogTitle>
              <DialogDescription>
                Make changes to your child here. Click save when you're done.{" "}
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Todo
                </Label>
                <Input
                  id="name"
                  {...register("new-todo")}
                  defaultValue={todo.todo}
                  className="col-span-3"
                />
              </div>
              {/* <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input
              id="username"
              defaultValue="@peduarte"
              className="col-span-3"
            />
          </div> */}
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button type="submit" onClick={onSubmit}>
                  Save changes
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </form>{" "}
      {message && (
        <ToastDemo
          description="Todo düzenlendi!"
          title="Todonuz kaydedildi"
        ></ToastDemo>
      )}
    </>
  );
}
