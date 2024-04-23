import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { ToastDemo } from "./ToastDemo";
import { useDispatch } from "react-redux";
import { todoActions } from "@/store";
import { useState } from "react";

const Form = () => {
  const dispatch = useDispatch();
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    resetField,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
    }, 300);
    data.id = Math.floor(Math.random() * 100);
    dispatch(todoActions.addTodo(data));
    resetField("todo");
  };

  return (
    <>
      <form className="px-3 max-w-sm mx-auto" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-5 mt-3">
          <label
            htmlFor="todo"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            New Todo
          </label>
          <input
            type="todo"
            {...register("todo", { required: true })}
            id="todo"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="todo - mission"
          />
        </div>

        {errors.todo && (
          <ToastDemo
            description="Lütfen tüm alanları doldurunuz!"
            title="Uygun olmayan todo"
          ></ToastDemo>
        )}

        {success && (
          <ToastDemo
            description="Todo Başarıyla Eklendi!"
            title="Todo Eklendi"
          ></ToastDemo>
        )}

        <Button
          type="submit"
          className="text-white w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Add Todo
        </Button>
      </form>
    </>
  );
};

export default Form;
