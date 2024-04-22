import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

import Navbar from "./Component/Navbar";
import Routes from "./Roouts/Approutes"
function App() {
  return (
    <>
    <Router>
      <div>
        <Navbar/>
        <Routes/>
      </div>


    </Router>
  
    </>
  );
}

export default App;
