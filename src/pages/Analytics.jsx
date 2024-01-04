import React, { useState } from "react";
import Graph from "../components/chart/Graph";

const arrayButtonRadius = [
  {
    name: "Test 1",
  },
  {
    name: "Test 2",
  },
  {
    name: "Test 3",
  },
  {
    name: "Test 4",
  },
  {
    name: "Test 5",
  },
  {
    name: "Test 6",
  },
  {
    name: "Test 7",
  },
  {
    name: "Test 8",
  },
];

const arrayButtonSecond = [
  {
    name: "Monthly",
  },
  {
    name: "Daily",
  },
  {
    name: "30p",
  },
];
const Analytics = () => {
  const [buttonRadiusIndex, setButtonRadiusIndex] = useState(2);
  const [buttonRadiusSecond, setButtonRadiusSecond] = useState(2);
  const [checkList, setCheckList] = useState({
    a: true,
    b: true,
    c: true,
    d: true,
})
  const ButtonRadius = (props) => {
    return (
      <button
        className={`analytic__button-radius-item ${
          props.number === buttonRadiusIndex ? "active" : ""
        }`}
        onClick={() => setButtonRadiusIndex(props.number)}
      >
        {props.name}
      </button>
    );
  };
  const ButtonSecond = (props) => (
    <button
      className={`analytic__button-second-item ${
        buttonRadiusSecond === props.number ? "active" : ""
      }`}
      onClick={() => setButtonRadiusSecond(props.number)}
    >
      {props.name}
    </button>
  );
  return (
    <div>
      <div className="analytics">
        <div className="analytics__header">
          <div></div>
          <span> Display range</span>
        </div>
        <div className="analytics__header-item">
          <div>
            <span>Country</span>
            <select style={{ padding: "5px 10px", borderRadius:'5px' }}>
              <option>HCM</option>
              <option>HN</option>
            </select>
          </div>
          <div className="analytic__button-radius">
            <span>Area</span>
            {arrayButtonRadius.map((item, index) => (
              <div key={index}>
                <ButtonRadius name={item.name} number={index} />
              </div>
            ))}
          </div>
          <div>
            <span>Display unit</span>
            {arrayButtonSecond.map((item, index) => (
              <ButtonSecond name={item.name} number={index} />
            ))}
          </div>
          <div>
            <span>Display day</span>
            <ButtonSecond name={"Today"} />
          </div>
        </div>
      </div>
      <div className="analytics-body">
        <div className="analytics-body__left">
          <div className="analytics-body__left-header">
            <div className="analytics-body__left-header-one">
              <span>Situation</span>
            </div>
            <div className="analytics-body__left-header-two">
              <span>Surplus(kWh)</span>
            </div>
            <div className="analytics-body__left-header-three">
              <span>Performance</span>
              <h3>0</h3>
            </div>
            <div className="analytics-body__left-header-three">
              <span>Foorecast</span>
              <h3>0</h3>
            </div>
            <div className="analytics-body__left-header-three">
              <span>Planning</span>
              <h3>0</h3>
            </div>
            <div className="analytics-body__left-header-three">
              <span>Imbalance</span>
              <h3>0</h3>
            </div>
            <div className="analytics-body__left-header-three">
              <span>Deficit Imbalance</span>
              <h3>0</h3>
            </div>
          </div>
          <div className="analytics-body__left-body">
            {/* <span>Plant list</span> */}
            <div className="analytics-body__left-header-one">
              <span>Plant list</span>
            </div>
            <div className="analytics-body__left-body-select">
              <checkbox /> Select all
            </div>
            <div className="analytics-body__left-body-three">
              <span>Power palnt</span>
              <span>Surplus(kWh)</span>
            </div>
            <div className="analytics-body__left-body-4">
              <div className="analytics-body__left-body-select">
                <checkbox /> Select all
              </div>
              <h3>0</h3>
            </div>
          </div>
        </div>
        <div className="analytics-body__right">
        <Graph checkList={checkList} />
      </div>
      </div>
    
    </div>
  );
};

export default Analytics;
