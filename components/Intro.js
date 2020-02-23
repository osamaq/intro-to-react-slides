import React from "react";
import ReactLogo from "./ReactLogo";
import CoolReact from "./CoolReact";
import innov8tifLogo from "../assets/innov8tif_full.png";

export default function Intro() {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        zIndex: 10,
        backgroundColor: "white"
      }}
    >
      <header style={{ textAlign: "center", padding: "50px" }}>
        <h1 style={{ fontWeight: "bold", letterSpacing: 1.2 }}>
          Introduction to <CoolReact />
          <ReactLogo
            style={{ height: "66px", width: "auto", top: "14px", left: "18px" }}
          />
        </h1>
        <span style={{ fontWeight: "lighter", fontSize: "smaller" }}>
          Osama Qarem
        </span>
      </header>
      <p
        style={{
          marginTop: "10%",
          textAlign: "center",
          letterSpacing: 0.4,
          justifyContent: "center"
        }}
      >
        Sharing session @{" "}
        <img
          src={innov8tifLogo}
          height="50"
          style={{ verticalAlign: "text-top" }}
        />
        <br />
        <span
          style={{
            fontSize: "1.2rem",
            color: "#000000ad",
            letterSpacing: "normal"
          }}
        >
          11<sup>th</sup> of March
        </span>
      </p>
    </div>
  );
}
