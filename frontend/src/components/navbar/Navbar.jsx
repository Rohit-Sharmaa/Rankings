import "./navbar.css";
import logo from "../../assests/7.jpg";
import data from "./data.js";
import { Link, NavLink } from "react-router-dom";
import { MdMenuOpen } from "react-icons/md";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);

  const handleLoginClick = () => {
    navigate("/login");
  };

  const hanleRankingClick = () => {
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="nav_container">
        <div className="nav_logo_container">
          <img src={logo} alt="logo" className="nav_logo" />
          <h3 onClick={hanleRankingClick} className="nav_title">
            Ranking
          </h3>
        </div>
        {/* this is for option  */}

        <ul className="nav_menu">
          {data.map((item) => (
            <li key={item.id}>
              <NavLink
                to={item.link}
                className={({ isActive }) =>
                  `nav_list_item ${isActive ? "active" : ""}`
                }
              >
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="login_button">
          {/* <button className="btn light theme">
            <MdOutlineLightMode />
          </button> */}
          <button className="btn white sm" onClick={handleLoginClick}>
            Login
          </button>
        </div>

        <div>{/* sign up and sign in button  */}</div>

        {/* Menu for smart phone*/}
        <div>
          <MdMenuOpen
            className="m_nav_icon"
            onClick={() => setToggle(!toggle)}
            fontSize={24}
          />
          <div
            onClick={() => setToggle(!toggle)}
            className={`${!toggle ? "m_nav_hidden " : "m_nav_menu"} `}
          >
            <ul className="m_nav_menu_ul">
              {data.map((item) => (
                <li key={item.id}>
                  <Link to={item.link} className="m_nav_menu_ul_link">
                    {item.title}
                  </Link>
                </li>
              ))}
               <li>
                <button className="btn white sm m_nav_login" onClick={handleLoginClick}>
                  Login
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
