import Todo from "../UI/Todo";
import TodoForm from "./TodoForm";

const Todos = () => {
  return (
    <div className="h-screen flex">
      <TodoForm />
      <Todo />
    </div>
  );
};

export default Todos;
