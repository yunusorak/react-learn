import React from "react";
import TodoItem from "./TodoItem";

const TodoList = () => {
  return (
    <>
      <div className="mt-4 bg-white rounded shadow p-6 w-full lg:w-3/4 lg:max-w-lg m-auto dark:bg-slate-900 dark:text-white">
        <TodoItem />
      </div>
    </>
  );
};

export default TodoList;
