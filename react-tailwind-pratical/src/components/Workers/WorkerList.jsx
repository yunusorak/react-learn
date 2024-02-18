import Card from "../UI/Card";

const WorkerList = (props) => {
  const deleteWorkerHandler = (workerId) => {
    // console.log(e.target.getAttribute("key"));

    props.setWorkers(props.workers.filter((item) => item.id !== workerId));
  };

  console.log(props.workers);
  return (
    <>
      {props.workers.length === 0 ? (
        <h1 className="font-bold text-3xl text-center text-cyan-300">
          Çalışan bulunamadı
        </h1>
      ) : (
        <Card className="p-5 rounded bg-white">
          <ul>
            <li className="flex justify-between align-center">
              <span className="font-bold">İsim</span>
              <span className="font-bold">Maaş</span>
            </li>

            {/* <li className="p-3 flex justify-between select-none hover:shadow-2xl align-center cursor-pointer">
       <span className="font-medium">Emir Başbayan</span>
       <span className="text-lime-700 font-bold">643067304763₺</span>
     </li> */}
            {props.workers.map((worker) => (
              <li
                onClick={() => deleteWorkerHandler(worker.id)}
                key={worker.id}
                className="p-3 flex justify-between select-none hover:shadow-2xl align-center cursor-pointer"
              >
                <span className="font-medium">{worker.name}</span>

                <span className="bg-purple-100 text-purple-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300">
                  {worker.id}
                </span>

                <span className="text-lime-700 font-bold">{worker.wage}₺</span>
              </li>
            ))}
          </ul>
        </Card>
      )}
    </>
  );
};

export default WorkerList;
