import { useState } from "react";
import Todo from "../UI/Todo";
import TodoForm from "./TodoForm";
import Card from "../UI/Card";
const Todos = () => {
  const [todos, setTodos] = useState([]);
  return (
    <div className="h-screen">
      <TodoForm setTodos={setTodos} />

      {todos.length > 0 && (
        <Card className="bg-white rounded shadow p-6 w-full lg:w-3/4 lg:max-w-lg m-auto">
          <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans flex-col">
            {todos.map((todo) => (
              <Todo
                key={todo.id}
                todo={todo}
                todos={todos}
                setTodos={setTodos}
              />
            ))}
          </div>
        </Card>
      )}
    </div>
  );
};

export default Todos;
