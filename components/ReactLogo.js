import React from "react";
import reactLogo from "../assets/react_logo.png";

export default function ReactLogo({ style = {} }) {
  return (
    <img
      src={reactLogo}
      style={{
        height: 40,
        width: 40,
        top: 8,
        left: 4,
        position: "relative",
        ...style
      }}
    />
  );
}
