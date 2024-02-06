import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const CreateTask = ({ modal, toggle, save }) => {
  const [taskName, setTask] = useState("");
  const [description, setDescription] = useState("");
  const useHandleChange = (e) => {
    const { name, value } = e.target;

    if (name === "taskName") {
      setTask(value);
    } else {
      setDescription(value);
    }
  };

  const buttonStyle = {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    alignSelf: "flex-start",
    fontFamily: "inherit",
    color: "#717171",
    fontWeight: 600,
    width: "40%",
    background: "#313131",
    border: "1px solid #414141",
    padding: "12px 16px",
    fontSize: "inherit",
    gap: "8px",
    marginTop: "8px",
    cursor: "pointer",
    borderRadius: "6px",
  };

  const handleSave = () => {
    let taskObj = {};
    taskObj["Name"] = taskName;
    taskObj["description"] = description;
    save(taskObj);
  };
  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader className="text-light border-0" toggle={toggle}>
        Create Task
      </ModalHeader>
      <ModalBody className="form-container">
        <form class="form">
          <div class="form-group">
            <label>Task</label>
            <input
              type="text"
              placeholder="Enter your Task"
              className="form-control"
              value={taskName}
              onChange={useHandleChange}
              name="taskName"
            />
          </div>
          <div class="form-group">
            <label for="textarea">Task Description</label>
            <textarea
              className="form-control"
              rows="5"
              placeholder="description"
              value={description}
              onChange={useHandleChange}
              name="description"
            ></textarea>
          </div>
        </form>
      </ModalBody>
      <ModalFooter className="border-0">
        <Button
          color="primary"
          className="form-submit-btn"
          onClick={handleSave}
          style={buttonStyle}
        >
          Save Task
        </Button>{" "}
        <Button color="secondary" onClick={toggle} style={buttonStyle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default CreateTask;
