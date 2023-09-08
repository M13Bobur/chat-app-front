import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import "./style.css";
import { FiChevronRight } from "react-icons/fi";

export default ({ options, handleChange, active }) => {
  const [hideOptions, setHideOptions] = useState(false);

  const handleHide = () => {
    setHideOptions(!hideOptions);
  };
  const handleItem = (id) => {
    handleChange(id);
    setHideOptions(false);
  };
  const changeName = () => {
    let cat = options.find((item) => item._id == active);
    return cat?.title || "";
  };
  return (
    <>
      <div className="app-container">
        <button onClick={handleHide} className="category-button">
          {" "}
          <div>{changeName()}</div>{" "}
          <div
            style={{
              width: "20px",
              height: "20px",
              background: "#E3F0FF",
              borderRadius: "4px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <FiChevronRight size={14} />
          </div>
        </button>
      </div>
      {hideOptions && (
        <div className="optionsContainer">
          {options?.map((item, ind) => (
            <button
              key={ind + 1}
              className="item-button"
              onClick={() => handleItem(item._id)}
            >
              {item.title}
            </button>
          ))}
        </div>
      )}
    </>
  );
};
