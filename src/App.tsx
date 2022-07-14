import logo from "./diy-gas-swap.png";
import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Self serve gas swap now available at Bunnings.</p>
        <Link
          to="/empty"
          style={{
            textDecoration: "none",
            margin: "auto",
            marginBottom: "20px",
          }}
        >
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
      </header>
    </div>
  );
}

export default App;
