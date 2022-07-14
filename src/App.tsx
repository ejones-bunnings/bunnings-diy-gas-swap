import home_logo from "./home_logo.png";
import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header" style={{maxWidth: "480px",margin:"auto",minHeight:"100vh"}}>
        <img src={home_logo} style={{maxWidth: "300px"}} alt="logo" />
        
        {/* <img src={home_logo} alt="" style={{width:"200px",height:"21px",margin:"22px auto"}}/> */}
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
