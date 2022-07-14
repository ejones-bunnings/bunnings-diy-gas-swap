import React from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";
function WeightCylinder() {
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
                <p>Which size cylinder are you dropping off?</p>
            </div>
            <Link to="/condition" style={{textDecoration: "none",margin: "auto",marginBottom:"20px"}}><Button text={"8.5 kg"}></Button></Link>
            <Link to="/condition" style={{textDecoration: "none",margin: "auto"}}><Button text={"3.7 kg"}></Button></Link>
        </div>
    )
}
export default WeightCylinder