import { useState } from "react";
import Todo from "../UI/Todo";
import TodoForm from "./TodoForm";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  console.log(todos);

  return (
    <div className="h-screen flex">
      <TodoForm setTodos={setTodos} />
      <Todo />
    </div>
  );
};

export default Todos;
