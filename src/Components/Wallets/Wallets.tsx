import React from "react";
import "./Styles/Wallet.css";
export const Wallets = () => {
  return (
    <div>
      <div className="navbar">
        <div className="navbar-start">
          <div className="ml-24 wallet-titles">التاريخ</div>
          <div className="ml-24 wallet-titles">العميل</div>
          <div className="ml-24 wallet-titles">المبلغ المدين</div>
          <div className="ml-24 wallet-titles">المبلغ الدائن</div>
          <div className="ml-24 wallet-titles">الرصيد</div>
          <div className="ml-56 wallet-titles">البيان</div>
        </div>
        <div className="navbar-end" style={{ marginLeft: "160px" }}>
          <div className="wallet-titles">Action</div>
        </div>
      </div>

      <div className="navbar">
        <div className="navbar-start">
          <div className="ml-24 wallet-titles">١٢\١٠\٢٠٢٣</div>
          <div className="ml-24 wallet-titles">رحمة محمد</div>
          <div className="ml-24 wallet-titles">400 جم</div>
          <div className="ml-24 wallet-titles">400 جم</div>
          <div className="ml-24 wallet-titles">١000 جم</div>
          <div className="ml-56 wallet-titles">قيمة مهمة رقم 123</div>
        </div>
        <div className="navbar-end" style={{ marginLeft: "160px" }}>
          <div className="wallet-titles">تسوية</div>
        </div>
      </div>
    </div>
  );
};
