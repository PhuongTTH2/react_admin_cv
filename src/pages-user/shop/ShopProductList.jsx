import React from "react";
import Announcement from "../../components-users/shop/Announcement";
import Navbar from "../../components-users/shop/Navbar";
import Newsletter from "../../components-users/shop/Newsletter";
import ProductsList from "../../components-users/shop/ProductsList";
import Products from "../../components-users/shop/Products";
import Footer from "../../components-users/shop/Footer";
const ShopProductList = () => {
  return (
    <div style={{ margin: 0, padding: 0 }}>
      <Navbar />
      <Announcement />
      <ProductsList />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ShopProductList;
