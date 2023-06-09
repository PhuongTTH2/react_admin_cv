import React from "react";
import "./userfooter.css";

const footer1 = [
  {
    name: "Trang Chủ",
  },
  {
    name: "Về ITviec.com",
  },
  {
    name: "Dịch vụ gợi ý ứng viên",
  },
  {
    name: "Liên Hệ",
  },
  {
    name: "Việc Làm IT",
  },
  {
    name: "Câu hỏi thường gặp",
  },
];
const footer2 = [
  {
    name: "Quy định bảo mật",
  },
  {
    name: "Quy chế hoạt động",
  },
  {
    name: "Giải quyết khiếu nại",
  },
  {
    name: "Thoả thuận sử dụng",
  },
  {
    name: "Thông cáo báo chí",
  },
];
const UserFooter = () => {
  const UserFooterText = (props) => <span>{props.name}</span>;
  return (
    <div>
      <div className="row user-footer">
        <div className=" col-3 user-footer-h3">
          <h3>Về ITviec</h3>
          {footer1.map((item, index) => (
            <UserFooterText name={item.name} />
          ))}
        </div>
        <div className=" col-3 user-footer-h3">
          <h3>Điều khoản chung</h3>
          {footer2.map((item, index) => (
            <UserFooterText name={item.name} />
          ))}
        </div>
        <div className=" col-3 user-footer-h3">
          <span>Copyright © IT VIEC JSC</span>
          <span>MST: 0312192258</span>
          <div className="user-footer-icon">
            <i class="bx bxl-facebook-circle"></i>
            <i class="bx bxl-linkedin"></i>
            <i class="bx bxl-youtube"></i>
          </div>
        </div>
      </div>
      <div className="row col-3 user-footer-h3 ">
        <h3>Liên hệ để đăng tin tuyển dụng tại:</h3>
        <span>
          Hồ Chí Minh: (+84) 977 460 519 - Hà Nội: (+84) 983 131 351 - Email:
          love@itviec.com
        </span>
      </div>
    </div>
  );
};

export default UserFooter;
