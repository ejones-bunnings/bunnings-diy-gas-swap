import React from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";
function EmptyCylinder() {
    return (
        <div style={{display:"flex",flexDirection:"column"}}>
            <div style={{
                fontFamily: 'Futura Std',
                fontSize: "24px",
                lineHeight: "36px",
                textAlign: "center",
                letterSpacing: "0.8px",
                color: "#333333",
                margin: "auto",
                width:"87.7vw",
                maxWidth: "342px",
                marginBottom: "20px"
            }}>
                <p>Do you have an empty gas cylinder to drop off?</p>
            </div>
            <Link to="/weight" style={{textDecoration: "none",margin: "auto",marginBottom: "20px"}}><Button text={"Yes"}></Button></Link>
            <Link to="/weight" style={{textDecoration: "none",margin: "auto"}}><Button text={"No"}></Button></Link>
        </div>
    )
}
export default EmptyCylinder