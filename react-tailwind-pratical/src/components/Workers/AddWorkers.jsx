import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import WorkerList from "./WorkerList";
import ErrorModal from "../UI/ErrorModal";

const AddWorkers = (props) => {
  const [workerData, setWorkerData] = useState({
    workerName: "",
    workerWage: "",
  });
  const [error, setError] = useState(false);
  const minimumWage = 5500;

  const updateWorkerData = (e) => {
    setWorkerData((prevState) => {
      return {
        ...prevState,
        [e.target.getAttribute("workerkey")]: e.target.value.trim(),
      };
    });
  };
  const addWorkerHandler = (e) => {
    e.preventDefault();
    if (workerData.workerName.trim().length === 0) {
      setError({
        title: "İsim Alanı Zorunludur!",
        message: "Lütfen bir isim giriniz",
      });
      return;
    } else if (+workerData.workerWage < minimumWage) {
      setError({
        title: "Maaş Alanı Zorunludur!",
        message: `Lütfen en düşük maaş olarak ${minimumWage + 1} giriniz`,
      });
      return;
    }

    props.setWorkers((prevState) => {
      return [
        ...prevState,
        {
          wage: workerData.workerName,
          name: workerData.workerWage,
          id: Math.floor(Math.random() * 1000),
        },
      ];
    });
    setWorkerData(() => {
      return { workerName: "", workerWage: "" };
    });
  };

  const errorHandler = (e) => {
    setError(null);
  };

  return (
    <Card className="bg-white p-5 rounded-md mb-6 mt-10">
      {error && <ErrorModal error={error} onConfirm={errorHandler} />}
      <form className="flex flex-col gap-y-2" onSubmit={addWorkerHandler}>
        <label className="text-left font-medium" htmlFor="name">
          Çalışan İsmi
        </label>
        <input
          className="max-w-[40rem] w-full mx-auto border p-2"
          id="name"
          type="text"
          placeholder="Çalışan ismi yazınız"
          workerkey="workerName"
          value={workerData.workerName}
          onChange={updateWorkerData}
        />
        <label className="font-medium text-left" htmlFor="wage">
          Maaş Miktarı
        </label>

        <input
          className="max-w-[40rem] w-full mx-auto border p-2"
          id="wage"
          type="number"
          value={workerData.workerWage}
          workerkey="workerWage"
          onChange={updateWorkerData}
          placeholder="Maaş Giriniz"
        />
        <Button type="submit" className="mt-3 bg-blue-600">
          Ekle
        </Button>
      </form>
    </Card>
  );
};

export default AddWorkers;
