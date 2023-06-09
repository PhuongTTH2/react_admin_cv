import React from "react";
import Announcement from "../../components-users/shop/Announcement";
import Navbar from "../../components-users/shop/Navbar";
import Newsletter from "../../components-users/shop/Newsletter";
import ProductId from "../../components-users/shop/ProductId";
import Footer from "../../components-users/shop/Footer";
const ShopProductId = () => {
  return (
    <div style={{ margin: 0, padding: 0 }}>
      <Navbar />
      <Announcement />
      <ProductId />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ShopProductId;
