import React, { useState } from "react";
// import "./Sidebar.css";

import Logo from "../../imgs/logo.png";
import { SidebarData } from "../../Data/Data";
import { NavLink } from "react-router-dom";
import SidebarMenu from "./SidebarMenu";
const Sidebar = ({ children }) => {
  // const [selected, setSelected] = useState(0);

  return (
    <div className="main-container">
      <div className="Sidebars">
        <div className="logo">
          <img src={Logo} alt="" />
          <span> AlgoVIZ</span>
        </div>

        <div className="menu">
          {SidebarData.map((item, index) => {
            if (item.subMenu) {
              return <SidebarMenu item={item} />;
            }

            return (
              <NavLink activeClassName="active" to={item.path} end>
                <div key={index} className={"menuItem"}>
                  <item.icon />
                  <span>{item.heading}</span>
                </div>
              </NavLink>
            );
          })}
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Sidebar;
