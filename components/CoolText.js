import React from "react"

export default function CoolText({ noUnderline = false, text = "React" }) {
  if (noUnderline) {
    return <span style={{ color: "#1dc4f2" }}>{text}</span>
  } else {
    return (
      <u
        style={{
          color: "#1dc4f2",
          textDecorationColor: "orange"
        }}
      >
        {text}
      </u>
    )
  }
}
