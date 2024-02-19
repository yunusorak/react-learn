import { useState } from "react";

const Todo = (props) => {
  const todo = props.todo;
  const [todoState, setTodoState] = useState(todo.state);

  const deleteTodoHandler = (todoId) => {
    console.log(todoId);
    props.setTodos(() => props.todos.filter((todo) => todo.id !== todoId));
  };

  return (
    <>
      <div className="flex mb-4 items-center">
        <p
          className={`w-full text-grey-darkest min-w-[280px] max-w-[280px] ${
            todoState ? "line-through" : ""
          }`}
        >
          {todo.todo}
        </p>
        <button
          onClick={() => {
            setTodoState((prevState) => {
              return !prevState;
            });
          }}
          className={`flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green border-green hover:bg-green-600 ${
            todoState ? "hidden" : "block"
          }`}
        >
          Done
        </button>
        <button
          onClick={() => {
            setTodoState((prevState) => {
              return !prevState;
            });
          }}
          className={`flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green border-green hover:bg-gray-400
          ${todoState ? "block" : "hidden"}
          `}
        >
          Not Done
        </button>

        <button
          onClick={() => deleteTodoHandler(todo.id)}
          className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red-600"
        >
          Remove
        </button>
      </div>
      {/* <div className="flex mb-4 items-center">
        <p className="w-full line-through text-green">
          Submit Todo App Component to Tailwind Components
        </p>

        <button className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded text-grey border-grey hover:text-white hover:bg-gray-400">
          Not Done
        </button>

        <button className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red-600">
          Remove
        </button>
      </div> */}
    </>
  );
};

export default Todo;
