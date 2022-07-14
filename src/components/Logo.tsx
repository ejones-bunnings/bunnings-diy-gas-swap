import React from "react";

export default function Logo() {
  return (
    <>
      <div
        style={{
          width: "87.7vw",
          maxWidth: "342px",
          height: "80px",
          textAlign: "center",
          margin: "auto",
          marginTop: "20px"
        }}
      >
        <p style={{
          //personal use or commercial use???
            fontFamily: 'Akira Expanded',
            fontStyle: 'normal',
            fontWeight:'800',
            fontSize: "18px",
            lineHeight: "21px",
            letterSpacing: "0.4px",
            color: "#DC4428",
            border: "1.8px solid #333333"

        }}>DIY <span style={{color: "#F6B515"}}>GAS SWAP</span></p>
      </div>
    </>
  );
}
