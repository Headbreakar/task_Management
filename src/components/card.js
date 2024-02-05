import React from "react";

const card = ({ taskObj, index }) => {
  const colors = [
    {
      primaryColor: "#5D93E1",
      secondaryColor: "#ECF3FC",
    },
    {
      primaryColor: "#F9D288",
      secondaryColor: "#FEFAF1",
    },
    {
      primaryColor: "#5DC250",
      secondaryColor: "#F2FAF1",
    },
    {
      primaryColor: "#F48687",
      secondaryColor: "#FDF1F1",
    },
    {
      primaryColor: "#B964F7",
      secondaryColor: "#F3F0FD",
    },
  ];
  return (
    <div className="card-wrapper mr-5">
      <div
        className="card-top"
        style={{
          backgroundColor: colors[index % 5].primaryColor,
        }}
      ></div>
      <div className="task-holder">
        <span
          className="card-header fw-bold"
          style={{
            backgroundColor: colors[index % 5].secondaryColor,
            borderRadius: "10px",
          }}
        >
          {taskObj.Name}
        </span>
        <p className="my-2 mx-4">{taskObj.description}</p>

        <div style={{ position: "absolute", right: "20px", bottom: "20px" }}>
          <i
            className="far fa-edit"
            style={{ color: colors[index % 5].primaryColor }}
          ></i>
          <i
            className="far fa-trash-alt mx-2"
            style={{ color: colors[index % 5].primaryColor }}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default card;