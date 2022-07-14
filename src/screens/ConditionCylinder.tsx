import React, { useState } from "react";

import cylinder from "../cylinder.png";
import logo from '../diy-gas-swap.png'
import "./Condition.css";
import Button from "../components/Button";
import { Link } from "react-router-dom";
function ConditionCylinder() {
    const [foot, setFoot] = useState(false);
    const [neck, setNeck] = useState(false);
    const [pol, setPol] = useState(false);
    const [con, setCon] = useState(false);

    function handleInputChange(event: any) {
        const target = event.target;
        // const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        if (name === "foot")
            setFoot(!foot)
        if (name === "neck")
            setNeck(!neck)
        if (name === "pol")
            setPol(!pol)
        if (name === "con")
            setCon(!con)

    }
    return (
    <>
        <div className="Screen-Wrapper" style={{maxWidth: "480px",margin:"auto",minHeight:"100vh"}}>
            <header className="Cylinder-header">
                {/* <div style={{ height: 22 }} />
                <img src={logo} className="Cylinder-logo" alt="logo" />
                <div style={{ height: 22 }} /> */}
                <img src={logo} alt="" style={{width:"200px",height:"21px",margin:"22px auto"}}/>
                <img src={cylinder} className="Cylinder-logo" alt="cylinder" />
                <div style={{ height: 22 }} />
                <p className="Text">Check the conditions of your empty cylinder</p>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start'
                }}>
                    <div className="Checkbox" >
                        <input
                            name="foot"
                            type="checkbox"
                            checked={foot}
                            onChange={handleInputChange}
                        /><p
                            style={{ paddingLeft: 10, fontStyle: 'normal', fontFamily: "futura-standard" }}
                        >Has a foot ring</p>
                    </div>
                    <div className="Checkbox" >
                        <input
                            name="neck"
                            type="checkbox"
                            checked={neck}
                            onChange={handleInputChange}
                        /><p
                            style={{ paddingLeft: 10, fontStyle: 'normal', fontFamily: "futura-standard" }}
                        >Has a neck ring or protective guard</p>
                    </div>
                    <div className="Checkbox" >
                        <input
                            name="pol"
                            type="checkbox"
                            checked={pol}
                            onChange={handleInputChange}
                        /><p
                            style={{ paddingLeft: 10, fontStyle: 'normal', fontFamily: "futura-standard" }}
                        >Has a POL or QCC valve</p>
                    </div>
                    <div className="Checkbox" >
                        <input
                            name="con"
                            type="checkbox"
                            checked={con}
                            onChange={handleInputChange}
                        /><p
                            style={{ paddingLeft: 10, fontStyle: 'normal', fontFamily: "futura-standard" }}
                        >Be in a good condition, slight rust is acceptable</p>
                    </div>
                </div>
            </header>
            <div style={{display:"flex",flexDirection:"column"}}>
            <Link to="/size" style={{textDecoration: "none",margin: "auto",marginBottom: "20px"}}><Button text={"All conditions are met"}></Button></Link>
            <Link to="/size" style={{textDecoration: "none",margin: "auto"}}><Button text={"Does not meet conditions"}></Button></Link>
            </div>
        </div>
    </>
    )
}
export default ConditionCylinder