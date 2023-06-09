import React, { useState } from "react";
import "./table.css";
const Table2 = (props) => {
  const { limit, headData, renderHead, bodyData, renderBody } = props;

  const initData =
    limit && bodyData ? bodyData.slice(0, Number(limit)) : bodyData;
  const [dataShow, setDataShow] = useState(initData);
  const [currPage, setCurrPage] = useState(0);
  let pages = 1;
  let range = [];
  if (props.limit !== undefined) {
    let page = Math.floor(props.bodyData.length / Number(props.limit));
    pages = props.bodyData.length % Number(props.limit) === 0 ? page : page + 1;
    for (let i = 0; i < pages; i++) {
      range.push(i);
    }
  }
  const selectPage = (page) => {
    let newPage = page
    if(page === -1){
      newPage = range.length - 1
    }
    if(page === range.length){
      newPage = 0
    }
    const start = Number(limit) * newPage;
    const end = start + Number(limit);
    setDataShow(bodyData.slice(start, end));
    setCurrPage(newPage);
  };
  return (
    <div>
      <div className="table">
        <table className="table2">
          {headData ? (
            <thead>
              <tr>{headData.map((item, index) => renderHead(item, index))}</tr>
            </thead>
          ) : null}
          {bodyData ? (
            <tbody>
              {dataShow.map((item, index) => renderBody(item, index))}
            </tbody>
          ) : null}
        </table>
      </div>
      {/* {pages > 1 ? (
        <div className="table__pagination2">
          {range.map((item, index) => (
            <div
              key={index}
              className={`table__pagination-item2 ${
                currPage === index ? "active" : ""
              }`}
              onClick={() => selectPage(index)}
            >
              {item + 1}
            </div>
          ))}
        </div>
      ) : null} */}
      {pages > 1 ? (
        <div className="table__pagination2">
          <div className="pointer" onClick={() => selectPage(currPage - 1)}>&laquo;</div>
          {range.map((item, index) => (
            <div>
              <div
                key={index}
                className={`table__pagination-item2 ${
                  currPage === index ? "active" : ""
                }`}
                onClick={() => selectPage(index)}
              >
                {item + 1}
              </div>
            </div>
          ))}
          <div className="pointer" onClick={() => selectPage(currPage + 1)}>&raquo;</div>
        </div>
        
      ) : null}
    
    </div>
  );
};

export default Table2;
