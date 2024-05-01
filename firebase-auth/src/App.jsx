import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import RootLayout from "./pages/RootLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { auth } from "./firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import ResetPassword from "./pages/ResetPassword";

function App() {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      // ...
    } else {
      // User is signed out
      // ...
    }
  });

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/login", element: <Login /> },
        { path: "/resetpassword", element: <ResetPassword /> },
      ],
    },
  ]);

  return (
    <RouterProvider router={router}>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </RouterProvider>
  );
}

export default App;
