import "./styles.css";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./routes/Home"
import About from "./routes/About";
import Service from "./routes/Service";
import Contact from "./routes/Contact";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="App">
     <Router>
      <Navbar/>
    </Router>
    </div>
   
  );
}
