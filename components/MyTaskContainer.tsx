"use client";
import Button from "./Button";
import Inputfield from "./Inputfield";
import { useState, useEffect } from "react";

const MyTaskContainer = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [totalTasks, setTotalTasks] = useState(0);
  const [totalCompletedTasks, setTotalCompletedTasks] = useState(0);
  const [completedTasks, setCompletedTasks] = useState(false);

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    const savedTotalTasks = localStorage.getItem("totalTasks");
    const savedTotalCompletedTasks = localStorage.getItem(
      "totalCompletedTasks"
    );

    if (savedTasks) {
      const parsedTasks = JSON.parse(savedTasks);
      setTasks(parsedTasks);
    }

    if (savedTotalTasks) {
      setTotalTasks(parseInt(savedTotalTasks));
    }

    if (savedTotalCompletedTasks) {
      setTotalCompletedTasks(parseInt(savedTotalCompletedTasks));
    }
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleAddTask = () => {
    if (inputValue.trim() === "") return;
    setTasks([...tasks, inputValue]);
    setInputValue("");
    setTotalTasks(totalTasks + 1);
  };

  const handleDeleteTask = (index: number) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
    setTotalTasks(totalTasks - 1);
  };

  const handleCompleteTask = (index: number) => {
    const newTasks = tasks.map((task, i) => {
      if (i === index) {
        return task;
      }
      return task;
    });
    setTasks(newTasks);
    setCompletedTasks(completedTasks);
    setTotalCompletedTasks(
      completedTasks ? totalCompletedTasks - 1 : totalCompletedTasks + 1
    );
  };

  return (
    <div>
      <div className="card w-96 bg-black card-xl shadow-sm rounded-xl">
        <div className="card-body">
          <h2 className="card-title flex justify-center items-center py-4">
            My Task
          </h2>
          <div className="flex flex-row gap-4">
            <Inputfield value={inputValue} onChange={handleInputChange} />
            <Button onClick={handleAddTask} />
          </div>
          <div className="mt-4">
            {tasks.length === 0 ? (
              <p className="text-gray-400 text-center">
                No tasks yet. Add one above!
              </p>
            ) : (
              <ul className="space-y-2">
                {tasks.map((task, index) => (
                  <li
                    key={index}
                    className="flex justify-between items-center bg-gray-800  p-3 rounded-lg"
                  >
                    <input
                      type="checkbox"
                      className="checkbox"
                      onClick={() => handleCompleteTask(index)}
                    />
                    <span className="text-white">{task}</span>
                    <button
                      className="btn btn-sm btn-error"
                      onClick={() => handleDeleteTask(index)}
                    >
                      Delete
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div>
            <h1>Total task: {totalTasks}</h1>
            <h1>Total completed task: {totalCompletedTasks}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyTaskContainer;
