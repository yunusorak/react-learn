const Todo = () => {
  return (
    <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
      <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
        <div className="flex mb-4 items-center">
          <p className="w-full text-grey-darkest">
            Add another component to Tailwind Components
          </p>
          <button className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green border-green hover:bg-green-600">
            Done
          </button>
          <button className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red-600">
            Remove
          </button>
        </div>
        <div className="flex mb-4 items-center">
          <p className="w-full line-through text-green">
            Submit Todo App Component to Tailwind Components
          </p>

          <button className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded text-grey border-grey hover:text-white hover:bg-gray-400">
            Not Done
          </button>

          <button className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red-600">
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
