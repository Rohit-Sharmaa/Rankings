import "./navbar.css";
import logo from "../../assests/7.jpg";
import data from "./data.js";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav_container">
        <div className="nav_logo_container">
          <img src={logo} alt="logo" className="nav_logo" />
          <h3>Ranking</h3>
        </div>
        {/* this is for option  */}

        <ul className="nav_menu">
          {data.map((item) => (
            <li key={item.id}>
              <Link to={item.link} className="nav_list_item">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        <div className="login_button">
          {/* <button className="btn light theme">
            <MdOutlineLightMode />
          </button> */}
          <button className="btn white sm">Login</button>
        </div>
        <div>{/* sign up and sign in button  */}</div>
      </div>
    </nav>
  );
}

export default Navbar;
