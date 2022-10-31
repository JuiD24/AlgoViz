import React, { useState } from "react";
import { UilAngleDown } from "@iconscout/react-unicons";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const SidebarMenu = ({ item }) => {
  const [isSubMenuOpen, setisSubMenuOpen] = useState(false);

  const toggelsubMenu = () => setisSubMenuOpen(!isSubMenuOpen);
  return (
    <>
      <div className="submenu" onClick={toggelsubMenu}>
        <div className="submenu-item">
          <item.icon />
          <span>{item.heading}</span>

          <div>
            <UilAngleDown />
          </div>
        </div>
      </div>
      {isSubMenuOpen && (
        <div className="submenu_container">
          {item.subMenu.map((submenu, index) => (
            <NavLink activeClassName="active" to={submenu.path}>
              <div key={index} className={"menuItem"}>
                <submenu.icon />
                <span>{submenu.heading}</span>
              </div>
            </NavLink>
          ))}
        </div>
      )}
    </>
  );
};

export default SidebarMenu;
