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
      <ModalHeader toggle={toggle}>Create Task</ModalHeader>
      <ModalBody>
        <form>
          <div className="form-group">
            <label>Task Name</label>
            <input
              type="text"
              placeholder="hello"
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
      <ModalFooter>
        <Button color="primary" onClick={handleChange}>
          Update
        </Button>{" "}
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default EditTask;
