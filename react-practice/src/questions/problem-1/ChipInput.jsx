import React, { useState } from "react";
import './ChipInput.css'

const ChipInput = () => {
  const [text, setText] = useState();
  const [stack, setStack] = useState([]);
  const handleChange = (e) => {
    e.preventDefault();
    setText(e.target.value);
  };
  const updateStack = (e) => {
    if (e.key === "Enter" && e.target.value[0] != " " && e.target.value != "") {
      const value = e.target.value;
      setStack([...stack, value]);
      setText("");
    }
  };

    const handleDelete = (index) => {
    const newStack = stack.filter((a, i) => i != index);
    setStack(newStack);
  }

  return (
    <div className="container">
      <h2>Chips Input</h2>
      <input
        type="text"
        placeholder="Type a chip and press tag"
        style={{ padding: "8px", width: "200px" }}
        onChange={handleChange}
        value={text}
        onKeyDown={updateStack}
      />
      <div className="tags">
        {stack.map((item, index) => {
          return (
            <span className="tag" key={index}>
              {item} <span onClick={()=> handleDelete(index)}>X</span>{" "}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default ChipInput;
