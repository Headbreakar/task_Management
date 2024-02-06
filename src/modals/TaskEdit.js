import React, { useEffect, useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const EditTask = ({ modal, toggle, update, taskObj }) => {
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

  useEffect(() => {
    setTask(taskObj.Name);
    setDescription(taskObj.description);
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    let tempObj = {};
    tempObj["Name"] = taskName;
    tempObj["description"] = description;
    update(tempObj);
  };

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader className="text-light border-0" toggle={toggle}>
        Edit Task
      </ModalHeader>
      <ModalBody className="form-container">
        <form className="form">
          <div className="form-group">
            <label>Task Name</label>
            <input
              type="text"
              placeholder="Your Previous Task"
              className="form-control"
              value={taskName}
              onChange={useHandleChange}
              name="taskName"
            />
          </div>
          <div className="form-group my-2">
            <label>Description</label>
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
        <Button color="primary" onClick={handleChange} style={buttonStyle}>
          Update
        </Button>{" "}
        <Button color="secondary" onClick={toggle} style={buttonStyle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default EditTask;
