import { Component } from "react";
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";

class Navbar extends Component {
  // Set state
  // Make Handleclick Function

  render() {
    return (
      <nav className="NavbarItems">
        <h1>Narasimma Travels</h1>
        <ul className="nav-menu">
          {MenuItems.map((item,index)=>{
            return(
              <li key={index}>
              <a className={item.cName} href={item.url}><i class={item.icon}></i>{item.title}</a>
            </li>
            )
          })}
          <button>Sign Up</button>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
