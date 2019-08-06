import React from "react";
import "./Button.scss";

export default function Button(props) {
  return (
    <div
      className={props.class}
      value={props.value}
      style={{
        backgroundImage: `url(${props.imageName})`,
        minWidth: `${props.size}px`,
        backgroundSize: `${props.bgSize}%`
      }}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  );
}

