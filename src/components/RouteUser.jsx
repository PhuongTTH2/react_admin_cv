import React from "react";
import { Route, Routes } from "react-router-dom";

import PageItViec from "../pages-user/PageItViec";
import PageUserHome from "../pages-user/PageUserHome";
import PageUserHotels from "../pages-user/PageUserHotels";
import PageUserHotelsList from "../pages-user/PageUserHotelsList";
import PageUserHotelsId from "../pages-user/PageUserHotelsId";
import Home from "../pages-user/shop/Home";
import ShopProductId from "../pages-user/shop/ShopProductId";
import ShopProductList from "../pages-user/shop/ShopProductList";
import ShopProductCart from "../pages-user/shop/ShopProductCart";
import Facebook from "../pages-user/Facebook"
const RouteUser = () => {
  return (
    <Routes>
      <Route path="/" element={<PageUserHome />} />
      <Route path="/user" element={<PageItViec />} />
      <Route path="/user/hotels" element={<PageUserHotels />} />
      <Route path="/user/hotels/hotels" element={<PageUserHotelsList />} />
      <Route path="/user/hotels/id" element={<PageUserHotelsId />} />
      <Route path="/user/shop" element={<Home />} />
      <Route path="/user/shop/id" element={<ShopProductId />} />
      <Route path="/user/shop/list" element={<ShopProductList />} />
      <Route path="/user/shop/cart" element={<ShopProductCart />} />
      <Route path="/user/facebook" element={<Facebook />} />
    </Routes>
  );
};

export default RouteUser;
