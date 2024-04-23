import React from "react";
import { AlertDialogDemo } from "../demo/AlertDialogDemo";
import { DialogDemo } from "../demo/DialogDemo";
import { useSelector } from "react-redux";

const TodoItem = () => {
  const todos = useSelector((state) => state.todo);

  return (
    <>
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans flex-col"
        >
          <div className="flex mb-4 items-center">
            <p className="w-full text-grey-darkest ">
              {todo.todo}
              <span className="bg-purple-100 text-purple-800 text-xs font-medium me-2 ml-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-purple-400 border border-purple-400">
                {todo.id}
              </span>
            </p>
            {/* <button className="dark:text-white dark:hover:bg-green-900 flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green border-green hover:bg-green-600 block">
        Edit
      </button> */}
            <DialogDemo todo={todo}>Edit Todo</DialogDemo>

            <div className="px-2">
              <AlertDialogDemo todo={todo}>Remove</AlertDialogDemo>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default TodoItem;
