import React from "react";

export default function Button({ text,reverse }: { text: String,reverse?: boolean }) {
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
          background: reverse?"#0D5257":"#FFFFFF"
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
            color: reverse?"#FFFFFF":"#333333",
          }}
        >
          {text}
        </p>
      </div>
    </>
  );
}
