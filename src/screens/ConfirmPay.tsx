import React from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import PaymentSummary from "../components/PaymentSummary";
import logo from '../diy-gas-swap.png'
function ConfirmPay() {
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
                margin: "auto",
                width:"87.7vw",
                maxWidth: "342px",
            }}>
                <p>Confirm and pay</p>
            </div>
            <PaymentSummary />
            <p style={{
            fontFamily: 'Futura Std',
            marginLeft: "16px",
            marginTop: '0',
            fontSize: "17px",
            lineHeight: "24px",
            letterSpacing: "0.4px",
            color: "#0D5257"
            }}>Pay with</p>
            <Link to="/cardDetail" style={{textDecoration: "none",margin: "auto",marginBottom: "10px"}}><Button text={"Credit Card"}></Button></Link>
            <Link to="/cardDetail" style={{textDecoration: "none",margin: "auto",marginBottom: "10px"}}><Button text={"Apple Pay"}></Button></Link>
            <Link to="/cardDetail" style={{textDecoration: "none",margin: "auto"}}><Button text={"PayPal"}></Button></Link>
        </div>
    )
}
export default ConfirmPay