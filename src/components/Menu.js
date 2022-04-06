import React from "react";

const Menu = ({ details }) => {
  return (
    <div>
      {details.map((detail) => (
        <div className="detailspreview" key={detail.id}>
          <h3>
            {detail.name} {detail.surname}{" "}
          </h3>
          <h4 style={{ color: "red" }}>{detail.city}</h4>
        </div>
      ))}
    </div>
  );
};

export default Menu;
