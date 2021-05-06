import React from "react";

export function TabTitle({setTab}) {
  
  return (
    <div className="tab-title">
      <a href="#" className="active">
        Thông tin tài khoản
      </a>
      <a href="#">Khóa học của bạn</a>
      <a href="#">Dự án đã làm</a>
      <a href="#">Lịch sử thanh toán</a>
      <a href="#">Quản lý COIN của tôi</a>
    </div>
  );
}
