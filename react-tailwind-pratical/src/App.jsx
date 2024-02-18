import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AddWorkers from "./components/Workers/AddWorkers";
import WorkerList from "./components/Workers/WorkerList";
import ErrorModal from "./components/UI/ErrorModal";

function App() {
  const [workers, setWorkers] = useState([]);

  return (
    <>
      <h1 className="text-fuchsia-500 text-center mt-3 font-bold text-3xl">
        Maaş Otomasyonu
      </h1>
      <span className="bg-purple-100 text-purple-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300">
        Purple
      </span>
      <AddWorkers workers={workers} setWorkers={setWorkers} />

      <WorkerList workers={workers} setWorkers={setWorkers} />
    </>
  );
}

export default App;
