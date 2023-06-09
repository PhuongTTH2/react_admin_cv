import React from "react";
import Navbar from "../components-users/hotels/navbar/Navbar";
import Header from "../components-users/hotels/header/Header";
import Footer from "../components-users/hotels/footer/Footer";
import MailList from "../components-users/hotels/maillist/MailList";
import Featured from "../components-users/hotels/featured/Featured";
import PropertyList from "../components-users/hotels/propertyList/PropertyList";
import FeaturedProperties from "../components-users/hotels/featuredProperties/FeaturedProperties";
const 
PageUserHotels = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList />
        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedProperties />
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default PageUserHotels;
