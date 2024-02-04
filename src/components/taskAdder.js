import React, { useState } from "react";
import CreateTask from "../modals/createTask";

const TaskAdder = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  return (
    <>
      <div className="header text-center">
        <h3>Manage your Tasks Effieciently</h3>
        <button className="btn btn-primary mt-2" onClick={() => setModal(true)}>
          Create a Task
        </button>
      </div>
      <div className="task-container"></div>
    </>
  );
};

export default TaskAdder;
