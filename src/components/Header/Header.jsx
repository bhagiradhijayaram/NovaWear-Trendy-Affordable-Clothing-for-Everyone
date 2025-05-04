import { Link, useNavigate } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import Cookies from "js-cookie";
import "./Header.css";

const navItems = ["Home", "About", "Cart", "Contact"];

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();

  const onLogout = () => {
    Cookies.remove("access_token");
    navigate("/login");
  };

  const toggleMenuBtn = () => {
    setToggle((prev) => !prev);
  };

  return (
    <header className="header">
      <nav className="nav-bar-container">
        <h1 className="logo">NovaWear</h1>

        {/* Desktop Navigation */}
        <ul className="nav-links-container desktop-nav-bar">
          {navItems.map((item) =>
            item === "Home" ? (
              <li key={item}>
                <Link to="/" className="nav-links">
                  {item}
                </Link>
              </li>
            ) : (
              <li key={item}>
                <Link to={`/${item.toLowerCase()}`} className="nav-links">
                  {item}
                </Link>
              </li>
            )
          )}

          <li>
            <button className="nav-btn" onClick={onLogout}>
              Logout
            </button>
          </li>
        </ul>

        {/* Mobile Navigation */}
        <ul className={`nav-menu-list-mobile ${toggle ? "open" : ""}`}>
          {navItems.map((item) =>
            item === "Home" ? (
              <li key={item} onClick={toggleMenuBtn}>
                <Link to="/" className="nav-links">
                  {item}
                </Link>
              </li>
            ) : (
              <li key={item} onClick={toggleMenuBtn}>
                <Link to={`/${item.toLowerCase()}`} className="nav-links">
                  {item}
                </Link>
              </li>
            )
          )}

          <li onClick={toggleMenuBtn}>
            <button className="nav-btn" onClick={onLogout}>
              Logout
            </button>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="menu-btn-container-mobile">
          <button className="menu-btn-mobile" onClick={toggleMenuBtn}>
            {!toggle ? (
              <AiOutlineMenu size={25} color="#fff" />
            ) : (
              <RxCross2 size={25} color="#fff" />
            )}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
