import logo from "./diy-gas-swap-home.png";
import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <p>Self serve gas swap now available at Bunnings.</p>
      <Link to="/empty">
        <>
          <div
            onClick={() => {}}
            style={{
              borderRadius: "16px",
              width: "87.7vw",
              maxWidth: "342px",
              height: "80px",
              textAlign: "center",
              border: "solid",
              borderColor: "white",
            }}
          >
            <p
              style={{
                margin: "0",
                lineHeight: "80px",
                fontFamily: "Futura Std",
                fontStyle: "normal",
                fontWeight: 800,
                fontSize: "26px",
                letterSpacing: "0.4px",
                color: "white",
              }}
            >
              Get Started
            </p>
          </div>
        </>
      </Link>
    </div>
  );
}

export default App;
