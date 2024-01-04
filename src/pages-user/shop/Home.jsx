import React from "react";
import Announcement from "../../components-users/shop/Announcement";
import Navbar from "../../components-users/shop/Navbar";
import Slider from "../../components-users/shop/Slider";
import Categories from "../../components-users/shop/Categories";
import Newsletter from "../../components-users/shop/Newsletter";
import Products from "../../components-users/shop/Products";
import Footer from "../../components-users/shop/Footer";
const Home = () => {
  return (
    <div style={{ margin: 0, padding: 0 }}>
      <Navbar />
      <Announcement />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
