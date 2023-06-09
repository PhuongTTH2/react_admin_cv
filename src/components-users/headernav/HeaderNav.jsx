import React from "react";
import "./headernav.css";

import itviec from "../../assets/images/users/logo-itviec.png";
const HeaderNav = () => {
  return (
    <div className="headernav">
      <div className="headernav__left">
        <div className="headernav__left-img">
          <img src={itviec} alt="" />
        </div>
        <span>Việc Làm IT</span>
        <span>Top Công ty IT</span>
        <span>Blog</span>
        <span>Chuyện IT</span>
      </div>
      <div className="headernav__right">
        <span>Liên Hệ Tuyển Dụng</span>
        <span>Đăng Nhập</span>
        <span>EN</span>
        <div></div>
        <span>VI</span>
      </div>
    </div>
  );
};

export default HeaderNav;
