import { useState } from "react";

import cylinder from "../cylinder.png";
import logo from "../diy-gas-swap.png";
import "./Condition.css";
import Button from "../components/Button";

import { useNavigate } from "react-router";

function ConditionCylinder() {
  const navigate = useNavigate();

  const [foot, setFoot] = useState(false);
  const [neck, setNeck] = useState(false);
  const [pol, setPol] = useState(false);
  const [con, setCon] = useState(false);

  function handleInputChange(event: any) {
    const target = event.target;
    // const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    if (name === "foot") setFoot(!foot);
    if (name === "neck") setNeck(!neck);
    if (name === "pol") setPol(!pol);
    if (name === "con") setCon(!con);
  }

  function handleConditionsMetPressed() {
    if (foot && neck && pol && con) {
      navigate("/size");
    } else {
      alert("Please select that all conditions are met");
    }
  }

  function handleConditionsNotMetPressed() {
    alert(
      "We are unable to accept your empty cylinder if it does not meet the conditions specified"
    );
  }

  return (
    <>
      <div
        className="Screen-Wrapper"
        style={{ maxWidth: "480px", margin: "auto", minHeight: "100vh" }}
      >
        <header className="Cylinder-header">
          {/* <div style={{ height: 22 }} />
                <img src={logo} className="Cylinder-logo" alt="logo" />
                <div style={{ height: 22 }} /> */}
          <img
            src={logo}
            alt=""
            style={{ width: "200px", height: "21px", margin: "22px auto" }}
          />
          <img src={cylinder} className="Cylinder-logo" alt="cylinder" />
          <div style={{ height: 22 }} />
          <p className="Text">Check the conditions of your empty cylinder</p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
            }}
          >
            <div className="Checkbox">
              <input
                name="foot"
                id="footCheckbox"
                type="checkbox"
                checked={foot}
                onChange={handleInputChange}
              />
              <label
                htmlFor="footCheckbox"
                style={{
                  paddingLeft: 10,
                  fontStyle: "normal",
                  fontFamily: "futura-standard",
                }}
              >
                Has a foot ring
              </label>
            </div>
            <div className="Checkbox">
              <input
                name="neck"
                id="neckCheckbox"
                type="checkbox"
                checked={neck}
                onChange={handleInputChange}
              />
              <label
                htmlFor="neckCheckbox"
                style={{
                  paddingLeft: 10,
                  fontStyle: "normal",
                  fontFamily: "futura-standard",
                }}
              >
                Has a neck ring or protective guard
              </label>
            </div>
            <div className="Checkbox">
              <input
                name="pol"
                id="polCheckbox"
                type="checkbox"
                checked={pol}
                onChange={handleInputChange}
              />
              <label
                htmlFor="polCheckbox"
                style={{
                  paddingLeft: 10,
                  fontStyle: "normal",
                  fontFamily: "futura-standard",
                }}
              >
                Has a POL or QCC valve
              </label>
            </div>
            <div className="Checkbox">
              <input
                name="con"
                id="conCheckbox"
                type="checkbox"
                checked={con}
                onChange={handleInputChange}
              />
              <label
                htmlFor="conCheckbox"
                style={{
                  paddingLeft: 10,
                  fontStyle: "normal",
                  fontFamily: "futura-standard",
                }}
              >
                Be in a good condition, slight rust is acceptable
              </label>
            </div>
          </div>
        </header>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "5vh",
          }}
        >
          <div
            style={{
              textDecoration: "none",
              margin: "auto",
              marginBottom: "20px",
            }}
          >
            <Button onClick={handleConditionsMetPressed} text={"All conditions are met"}></Button>
          </div>
          <div
            style={{ textDecoration: "none", margin: "auto" }}
          >
            <Button onClick={handleConditionsNotMetPressed} text={"Does not meet conditions"}></Button>
          </div>
        </div>
      </div>
    </>
  );
}
export default ConditionCylinder;
