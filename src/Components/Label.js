import React from "react";

import { useGlobalContext } from "../Pages/context";

const Label = (props) => {
  return (
    <div
      className='text'
      style={{
        position: "absolute",
        left: props.x + "px",
        top: props.y + "px",
        borderStyle: props.border,
        display: props.display,
      }}
    >
      {props.province}
    </div>
  );
};

export default Label;
