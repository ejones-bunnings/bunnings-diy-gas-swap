import React from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import logo from '../diy-gas-swap.png'
import card from "../card.png"
function CardDetail() {
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
                <p>Add card details</p>
            </div>
            <img src={card} alt='card detail' style={{margin:"22px auto"}}/>
            <Link to="/unlock" style={{textDecoration: "none",margin: "auto",marginBottom:"20px"}}><Button text={"Done"} reverse={true}></Button></Link>
        </div>
    )
}
export default CardDetail