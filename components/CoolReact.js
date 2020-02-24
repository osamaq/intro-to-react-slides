import React from "react";

export default function CoolReact({ noUnderline = false }) {
  if (noUnderline) {
    return <span style={{ color: "#1dc4f2" }}>React</span>;
  } else {
    return (
      <u
        style={{
          color: "#1dc4f2",
          textDecorationColor: "orange"
        }}
      >
        React
      </u>
    );
  }
}
