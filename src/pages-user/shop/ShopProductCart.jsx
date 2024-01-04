import React from "react";
import Announcement from "../../components-users/shop/Announcement";
import Navbar from "../../components-users/shop/Navbar";
import ProductCart from "../../components-users/shop/ProductCart";
import Footer from "../../components-users/shop/Footer";

const ShopProductCart = () => {
  return (
    <div style={{ margin: 0, padding: 0 }}>
      <Navbar />
      <Announcement />
      <ProductCart />
      <Footer />
    </div>
  );
};

export default ShopProductCart;
