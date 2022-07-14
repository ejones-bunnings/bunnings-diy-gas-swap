import React from "react";
import { Link } from "react-router-dom";
import logo from '../diy-gas-swap.png'
import unlock from "../unlock.png"
function UnlockCage() {
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
                margin: "30px auto",
                width:"57.7vw",
                maxWidth: "342px",
            }}>
                <p>Press the button to unlock the cage</p>
            </div>
            <Link to="/swap" style={{margin:"auto"}}><img src={unlock} alt="" style={{width:"304px"}}/></Link>
            <div style={{
                fontFamily: 'Futura Std',
                fontSize: "18px",
                lineHeight: "36px",
                textAlign: "center",
                letterSpacing: "0.8px",
                color: "#333333",
                margin: "auto",
                marginBottom: "20px",
                width:"57.7vw",
                maxWidth: "342px",
            }}>
                <p>Need help? Call TM</p>
            </div>
            
        </div>
    )
}
export default UnlockCage