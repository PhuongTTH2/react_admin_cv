import React from "react";
import a from '../assets/images/admin/line_vertical.svg'
const Products = () => {
  return (
    <div>
      <div className="row" style={{height:"60px", backgroundColor:'#FFF'}}>
        <div className="col-6 product-header">
          <div className="col-4 text-header product-header">Name A</div>
          <div className="col-8 price-header product-header"><span>28,328.0</span>kW</div>
        </div>
        <div className="col-6 product-header">
          <div className="col-4  text-header product-header">Name B</div>
          <div className="col-8 price-header product-header"><span>154,587.9</span>kW</div>
        </div>
      </div>


      <div className="row product-name">
        <h1 className="product-name-h1">Test 1</h1>
        <img src="/assets/images/admin/line_vertical.svg" alt="line-vertical" className="line"/>
        <span>Test</span>
        <img src="/assets/images/admin/filter_search.svg" alt="line-vertical" className="img_search"/>
        <img src="/assets/images/admin/line_vertical.svg" alt="line-vertical" className="line"/>
        <select style={{ padding: "5px 10px",border:'none' }}>
          <option>-</option>
          <option>Error 1</option>
          <option>Error 2</option>
        </select>
        <img src="/assets/images/admin/line_vertical.svg" alt="line-vertical" className="line"/>
        <span>Test</span>
        <img src="/assets/images/admin/up_down.svg" alt="line-vertical" className="img_search"/>
        <img src="/assets/images/admin/line_vertical.svg" alt="line-vertical" className="line line2" />
        <select style={{ padding: "5px 30px" , marginRight:'5px', border:'none'}}>
          <option>Company</option>
          <option>Site</option>
          <option>Error</option>
        </select>
        <select style={{ padding: "5px 10px",border:'none' }}>
          <option>ASC</option>
          <option>DESC</option>
        </select>
      </div>

      <div className="row product-name">
        <h1 className="product-name-h1" >Test 2</h1>
        <img src="/assets/images/admin/line_vertical.svg" alt="line-vertical" className="line"/>
        <span>Test</span>
        <img src="/assets/images/admin/up_down.svg" alt="line-vertical" className="img_search"/>
        <img src="/assets/images/admin/line_vertical.svg" alt="line-vertical" className="line line2" />
        <select style={{ padding: "5px 30px" , marginRight:'5px', border:'none'}}>
          <option>Company</option>
          <option>Site</option>
          <option>Error</option>
        </select>
        <select style={{ padding: "5px 10px", border:'none' }}>
          <option>ASC</option>
          <option>DESC</option>
        </select>
      </div>

    </div>
  );
};

export default Products;
