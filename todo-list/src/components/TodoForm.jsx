import { useState } from "react";

const TodoForm = (props) => {
  const [todo, setTodos] = useState({
    todo: "",
    state: false,
  });

  const updateTodo = (e) => {
    setTodos((prevState) => {
      return {
        state: false,
        [e.target.getAttribute("todokey")]: e.target.value.trim(),
      };
    });
  };
  const addTodoHandler = () => {
    props.setTodos((prevState) => {
      return [
        ...prevState,
        {
          todo: todo.todo,
          state: todo.state,
          id: Math.floor(Math.random() * 1000),
        },
      ];
    });
    setTodos({ todo: "", state: false });
  };

  return (
    <>
      <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
        <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg dark:bg-slate-900">
          <div className="mb-4">
            <h1 className="text-grey-darkest dark:text-white">Todo List</h1>
            <div className="flex mt-4">
              <input
                type="text"
                onChange={updateTodo}
                todokey="todo"
                className="shadow dark:placeholder:text-white dark:bg-slate-700 rounded dark:text-white border-slate-950 outline-none selection:text-teal-500 appearance-none border w-full py-2 px-3 mr-4 text-grey-darker"
                placeholder="Add Todo"
                value={todo.todo}
              />
              <button
                onClick={addTodoHandler}
                className="flex-no-shrink p-2 dark:text-white dark:hover:bg-slate-700 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal-600"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoForm;
