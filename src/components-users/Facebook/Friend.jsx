import React from "react";

import VideoCallIcon from "@material-ui/icons/VideoCall";
import SearchIcon from "@material-ui/icons/Search";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import "./facebook.css";
const Friend = () => {
  let rows = [];
  for (let i = 0; i < 1; i++) {
    rows.push(
      <div class="single_contact">
        <div class="user">
          <img src="/assets/images/user/haha.png" alt="" />
          <span></span>
        </div>
        <p>User {i + 1}</p>
      </div>
    );
  }

  return (
    <div>
      <div className="friend_right">
        <div className="contacts">
          <div className="heading">
            <h5>Người liên hệ</h5>
            <ul>
              <li>
                {" "}
                <VideoCallIcon style={{ fontSize: 20 }} />
              </li>
              <li>
                <SearchIcon style={{ fontSize: 20 }} />
              </li>
              <li>
                <MoreHorizIcon style={{ fontSize: 20 }} />
              </li>
            </ul>
          </div>
          {rows}
        </div>
      </div>
    </div>
  );
};

export default Friend;
