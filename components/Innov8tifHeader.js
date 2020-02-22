import React from "react";
import innov8tif from "../assets/innov8tif.png";
import ReactLogo from "./ReactLogo";

const styleSheet = {
  logo: { height: 60, width: 60, marginTop: 10 },
  span: {
    fontSize: "5rem",
    fontWeight: "bold",
    color: "#0000001c",
    position: "relative",
    bottom: "5px",
    marginRight: "15px",
    marginLeft: "15px"
  }
};

export default function Innov8tifHeader() {
  return (
    <>
      <img src={innov8tif} style={styleSheet.logo} />
      <span style={styleSheet.span}>+</span>
      <ReactLogo style={{ ...styleSheet.logo, top: 0, left: "-2px" }} />
    </>
  );
}
