import React from "react";
import HeaderNav from "../components-users/headernav/HeaderNav";
import SearchInput from "../components-users/searchinput/SearchInput";
import UserFooter from "../components-users/user-footer/UserFooter";
import PageItViecGrid from "../components-users/page-it-viec-grid/PageItViecGrid";
const PageItViec = () => {
  return (
    <div className="page-it-viec">
      <HeaderNav />
      <div className="page-it-viec__search">
        <SearchInput />
      </div>
      <div className="page-it-viec__box">
        <PageItViecGrid />
      </div>
      <div className="page-it-viec__footer">
        <UserFooter />
      </div>
    </div>
  );
};

export default PageItViec;
