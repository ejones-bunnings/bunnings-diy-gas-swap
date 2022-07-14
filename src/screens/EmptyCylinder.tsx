import React from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import logo from '../diy-gas-swap.png'
function EmptyCylinder() {
    return (
        <div style={{display:"flex",flexDirection:"column",maxWidth: "480px",margin:"auto",minHeight:"100vh"}}>
            <img src={logo} alt="" style={{width:"200px",height:"21px",margin:"22px auto"}}/>
            <div style={{
                fontFamily: 'Futura Std',
                fontSize: "24px",
                lineHeight: "36px",
                textAlign: "center",
                letterSpacing: "0.8px",
                color: "#333333",
                margin: "20px auto",
                width:"87.7vw",
                maxWidth: "342px",
            }}>
                <p>Do you have an empty gas cylinder to drop off?</p>
            </div>
            <Link to="/weight" style={{textDecoration: "none",margin: "20px auto"}}><Button text={"Yes"}></Button></Link>
            <Link to="/weight" style={{textDecoration: "none",margin: "20px auto"}}><Button text={"No"}></Button></Link>
        </div>
    )
}
export default EmptyCylinder