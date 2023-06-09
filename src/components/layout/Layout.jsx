import React, { useEffect } from "react";

import Sidebar from "../sidebar/Sidebar";
import TopNav from "../topnav/TopNav";
import RouteAdmin from "../RouteAdmin";
import RouteUser from "../RouteUser";
import "./layout.css";
import { BrowserRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ThemeAction from "../../redux/actions/ThemeAction";
const Layout = () => {
  const ThemeReducer = useSelector((state) => state.ThemeReducer);
  const dispatch = useDispatch();
  const location = window.location;
  let isAdmin = location.pathname.indexOf("admin");
  useEffect(() => {
    const themeClass = localStorage.getItem("themeMode", "theme-mode-light");

    const colorClass = localStorage.getItem("colorMode", "theme-mode-light");
    dispatch(ThemeAction.setMode(themeClass));
    dispatch(ThemeAction.setColor(colorClass));
    console.log(location.pathname.indexOf("/"));
  }, [dispatch]);
  return (
    <div>
      <BrowserRouter>
        {isAdmin === -1 ? (
          <RouteUser />
        ) : (
          <div className={`layout ${ThemeReducer.mode} ${ThemeReducer.color}`}>
            <Sidebar />
            <div className="layout__content">
              <TopNav />
              <div className="layout__content-main">
                <RouteAdmin />
              </div>
            </div>
          </div>
        )}
      </BrowserRouter>
    </div>
  );
};

export default Layout;
