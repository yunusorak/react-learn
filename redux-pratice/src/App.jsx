import TodoList from "./components/Todos/TodoList";
import Form from "./components/demo/Form";
import { ToastDemo } from "./components/demo/ToastDemo";
import Navbar from "./components/navbar";
import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <>
      <Navbar />
      <Form />
      <TodoList></TodoList>
      <ToastDemo></ToastDemo>
      <Toaster />
    </>
  );
}

export default App;
