import React, { useState } from "react";
import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";

import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";
const Header = ({ type }) => {
 
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  const handleSearch = () => {
    // navigate("/hotels", { state: { destination, date, options } });
  };
  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };
  return (
    <div className="user-hotels__header">
      <div className="user-hotels__header-container">
        <div className="user-hotels__headerList">
          <div className="user-hotels__headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="user-hotels__headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="user-hotels__headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
          </div>
          <div className="user-hotels__headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </div>
          <div className="user-hotels__headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxis</span>
          </div>
        </div>
        <h1 className="user-hotels__headerTitle">
          A lifetime of discounts? It's Genius.
        </h1>
        <p className="user-hotels__headerDesc">
          Get rewarded for your travels – unlock instant savings of 10% or more
          with a free Lamabooking account
        </p>
        <button className="user-hotels__headerBtn">Sign in / Register</button>
        {type !== "list" && (
          <div className="user-hotels__headerSearch">
            <div className="user-hotels__headerSearchItem">
              <FontAwesomeIcon icon={faBed} className="headerIcon" />
              <input
                type="text"
                placeholder="Where are you going?"
                className="headerSearchInput"
                onChange={(e) => setDestination(e.target.value)}
              />
            </div>
            <div className="user-hotels__headerSearchItem">
              <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
              <span
                onClick={() => setOpenDate(!openDate)}
                className="headerSearchText"
              >
                {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                  date[0].endDate,
                  "MM/dd/yyyy"
                )}`}
              </span>
              {openDate && (
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                  className="date"
                  minDate={new Date()}
                />
              )}
            </div>
            <div className="user-hotels__headerSearchItem">
              <FontAwesomeIcon icon={faPerson} className="headerIcon" />
              <span
                onClick={() => setOpenOptions(!openOptions)}
                className="headerSearchText"
              >
                {`${options.adult} adult · ${options.children} children · ${options.room} room`}
              </span>
              {openOptions && (
                <div className="user-hotels__options">
                  <div className="user-hotels__optionItem">
                    <span className="user-hotels__optionText">Adult</span>
                    <div className="user-hotels__optionCounter">
                      <button
                        disabled={options.adult <= 1}
                        className="user-hotels__optionCounterButton"
                        onClick={() => handleOption("adult", "d")}
                      >
                        -
                      </button>
                      <span className="user-hotels__optionCounterNumber">
                        {options.adult}
                      </span>
                      <button
                        className="user-hotels__optionCounterButton"
                        onClick={() => handleOption("adult", "i")}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="user-hotels__optionItem">
                    <span className="user-hotels__optionText">Children</span>
                    <div className="user-hotels__optionCounter">
                      <button
                        disabled={options.children <= 0}
                        className="user-hotels__optionCounterButton"
                        onClick={() => handleOption("children", "d")}
                      >
                        -
                      </button>
                      <span className="user-hotels__optionCounterNumber">
                        {options.children}
                      </span>
                      <button
                        className="user-hotels__optionCounterButton"
                        onClick={() => handleOption("children", "i")}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="user-hotels__optionItem">
                    <span className="user-hotels__optionText">Room</span>
                    <div className="user-hotels__optionCounter">
                      <button
                        disabled={options.room <= 1}
                        className="user-hotels__optionCounterButton"
                        onClick={() => handleOption("room", "d")}
                      >
                        -
                      </button>
                      <span className="user-hotels__optionCounterNumber">
                        {options.room}
                      </span>
                      <button
                        className="user-hotels__optionCounterButton"
                        onClick={() => handleOption("room", "i")}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="user-hotels__headerSearchItem">
              <button className="user-hotels__headerBtn" onClick={handleSearch}>
                Search
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
