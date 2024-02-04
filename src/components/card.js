import React from "react";

const card = ({ taskObj, index }) => {
  return (
    <div className="card-wrapper mr-5">
      <div className="card-top" style={{ backgroundColor: "chartreuse" }}></div>
      <div className="task-holder">
        <span
          className="card-header"
          style={{ backgroundColor: "#f2faf1", borderRadius: "10px" }}
        >
          {taskObj.Name}
        </span>
        <p>{taskObj.Description}</p>

        <div style={{ position: "absolute", right: "20px", bottom: "20px" }}>
          <i className="far fa-edit" style={{ color: "#5dc250" }}></i>
          <i className="far fa-trash-alt" style={{ color: "#5dc250" }}></i>
        </div>
      </div>
    </div>
  );
};

export default card;
