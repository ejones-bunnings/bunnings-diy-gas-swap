import React from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import logo from '../diy-gas-swap.png'
import PaymentSummary from "../components/PaymentSummary";
import success from "../Success.png"
function Done() {
    return (
        <div style={{display:"flex",flexDirection:"column",maxWidth: "480px",margin:"auto",minHeight:"100vh"}}>
            <img src={logo} alt="" style={{width:"200px",height:"21px",margin:"22px auto"}}/>
            <img src={success} alt="" style={{width: "60px", margin:"10px auto",}} />
            <div style={{
                fontFamily: 'Futura Std',
                fontSize: "24px",
                lineHeight: "36px",
                textAlign: "center",
                letterSpacing: "0.8px",
                color: "#0D5257",
                margin: "10px auto",
                width:"87.7vw",
                maxWidth: "342px",
            }}>
                <p>Thank you for shopping at Bunnings Hawthorn!</p>
            </div>
            <PaymentSummary />
            <Link to="/" style={{textDecoration: "none",margin: "auto",marginBottom:"20px"}}><Button text={"View receipt"} reverse></Button></Link>
            
        </div>
    )
}
export default Done