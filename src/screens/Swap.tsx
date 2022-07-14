import React from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import logo from '../diy-gas-swap.png'
function Swap() {
    return (
        <div style={{display:"flex",flexDirection:"column",backgroundColor:"#44AF69",maxWidth: "480px",margin:"auto",minHeight:"100vh"}}>
            <img src={logo} alt="" style={{width:"200px",height:"21px",margin:"22px auto"}}/>
            <div style={{
                fontFamily: 'Futura Std',
                fontSize: "24px",
                lineHeight: "36px",
                textAlign: "center",
                letterSpacing: "0.8px",
                color: "#FFFFFF",
                margin: "auto",
                width:"57.7vw",
                maxWidth: "342px",
            }}>
                <p>Cage opened...</p>
                <p>Swap your gas now</p>
            </div>
            <Link to="/done" style={{textDecoration: "none",margin: "auto",marginBottom:"20px"}}><Button text={"I’ve swapped my gas"} reverse={true}></Button></Link>
            
        </div>
    )
}
export default Swap