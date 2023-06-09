import React from "react";
import "./pageuserhome.css";
const PageUserHome = () => {
  return (
    <div className="page-user-home__root">
      <div className="page-user-home__body">
        <div>
          <h2> ■ Admin UI</h2>
          <div className="page-user-home__button">
            <a href="/admin">Admin</a>
          </div>
          <div className="page-user-home__button">
            <a href="/admin">Admin customers</a>
          </div>
          <div className="page-user-home__button">
            <a href="/admin">Admin analytics</a>
          </div>
        </div>
        <div>
          <h2> ■ User UI</h2>
          <div className="page-user-home__button">
            <a href="/user/hotels"> User hotels</a>
          </div>
          <div className="page-user-home__button">
            <a href="/user/hotels/hotels"> User hotels list</a>
          </div>
          <div className="page-user-home__button">
            <a href="/user/hotels/id"> User hotels id</a>
          </div>
          <div className="page-user-home__button">
            <a href="/user/shop"> User shop</a>
          </div>
          <div className="page-user-home__button">
            <a href="/user/shop/id"> User shop id</a>
          </div>
          <div className="page-user-home__button">
            <a href="/user/shop/list"> User shop list</a>
          </div>
          <div className="page-user-home__button">
            <a href="/user/shop/cart"> User shop list cart</a>
          </div>
          <div className="page-user-home__button">
            <a href="/user"> User Idviec</a>
          </div>
          <div className="page-user-home__button">
            <a href="/user/facebook"> User Facebook</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageUserHome;
