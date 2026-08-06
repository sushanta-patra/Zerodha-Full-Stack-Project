import React ,{useState} from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const handleProfileClick = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "30px" }} alt="logo" />

      <div className="menus">
        <ul>
          <li>
            <NavLink
              to="/"
              end
              style={{ textDecoration: "none" }}
              className={({ isActive }) => (isActive ? "selected" : "menu")}
            >
              <p>Dashboard</p>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/orders"
              style={{ textDecoration: "none" }}
              className={({ isActive }) => (isActive ? "selected" : "menu")}
            >
              <p>Orders</p>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/holdings"
              style={{ textDecoration: "none" }}
              className={({ isActive }) => (isActive ? "selected" : "menu")}
            >
              <p>Holdings</p>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/positions"
              style={{ textDecoration: "none" }}
              className={({ isActive }) => (isActive ? "selected" : "menu")}
            >
              <p>Positions</p>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/funds"
              style={{ textDecoration: "none" }}
              className={({ isActive }) => (isActive ? "selected" : "menu")}
            >
              <p>Funds</p>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/apps"
              style={{ textDecoration: "none" }}
              className={({ isActive }) => (isActive ? "selected" : "menu")}
            >
              <p>Apps</p>
            </NavLink>
          </li>
        </ul>

        <hr />

        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">SP</div>
          <p className="username">SK Patra</p>
        </div>
        {isProfileOpen && (
          <div className="profile-menu">
            <p className="profile-name">SK Patra</p>
            <hr className="profile-line"/>
            <button className="logout-btn">Logout</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;