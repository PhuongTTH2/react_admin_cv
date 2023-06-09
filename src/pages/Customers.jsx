import React from "react";

import Table from "../components/table/Table";
import Table2 from "../components/table2/Table2";
import customerList from "../assets/JsonData/customers-list.json";

const customerTableHead = [
  "",
  "name",
  "email",
  "phone",
  "total orders",
  "total spend",
  "location",
];

const renderHead = (item, index) => <th key={index}>{item}</th>;
const renderBody = (item, index) => (
  <tr key={index}>
    <td>{item.id}</td>
    <td>{item.name}</td>
    <td>{item.email}</td>
    <td>{item.phone}</td>
    <td>{item.total_orders}</td>
    <td>{item.total_spend}</td>
    <td>{item.location}</td>
  </tr>
);  
const renderHead2 = (item, index) => <th className="table2" key={index}>{item}</th>;
const renderBody2 = (item, index) => (
  <tr key={index}>
    <td className="table2-td">{item.id}</td>
    <td className="table2-td">{item.name}</td>
    <td className="table2-td">{item.email}</td>
    <td className="table2-td">{item.phone}</td>
    <td className="table2-td">{item.total_orders}</td>
    <td className="table2-td">{item.total_spend}</td>
    <td className="table2-td">{item.location}</td>
  </tr>
);  

const Customers = () => {
  return (
    <div>
      <h2 className="page-header">Customers</h2>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card__body">
              <Table
                limit={10}
                headData={customerTableHead}
                renderHead={(item, index) => renderHead(item, index)}
                bodyData={customerList}
                renderBody={(item, index) => renderBody(item, index)}
              />
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="card">
            <div className="card__body">
              <Table2
                limit={10}
                headData={customerTableHead}
                renderHead={(item, index) => renderHead2(item, index)}
                bodyData={customerList}
                renderBody={(item, index) => renderBody2(item, index)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
