import React from "react";

export default function Button({ text }: { text: String }) {
  return (
    <>
      <div
        onClick={() => {}}
        style={{
          borderRadius: "16px",
          width: "87.7vw",
          maxWidth: "342px",
          height: "80px",
          textAlign: "center",
          border: "solid",
          borderColor: "black",
        }}
      >
        <p
          style={{
            margin: "0",
            lineHeight: "80px",
            fontFamily: "Futura Std",
            fontStyle: "normal",
            fontWeight: 800,
            fontSize: "26px",
            letterSpacing: "0.4px",
            color: "#333333",
          }}
        >
          {text}
        </p>
      </div>
    </>
  );
}
