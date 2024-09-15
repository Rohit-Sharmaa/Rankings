import { Link } from "react-router-dom";
import { links } from "./data";
import "./footer.css";

const Footer = ({ scrollToTop }) => {
  return (
    <footer>
      <div className="container footer__container">
        <ul className="nav__menu">
          {links.map((flink) => (
            <li key={flink.id}>
              <Link to={flink.link}>
                <li>
                  <span>{flink.title}</span>
                </li>
              </Link>
            </li>
          ))}
        </ul>

        {/* <div className="footer__socials">
          {socials.map((social) => (
            <li
              key={social.id}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
            ></li>
          ))}
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
