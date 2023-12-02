import React, { useState } from "react";
import { DateObject } from "react-multi-date-picker";
import DatePicker from "react-multi-date-picker";
import "./Styles/Wallet.css";
export const WalletsHeader = () => {
  const [selectedMovement, setSelectedMovement] = useState(0);
  const [values, setValues] = useState([
    new DateObject().subtract(4, "days"),
    new DateObject().add(4, "days"),
  ]);

  const handleSelectMovement = (e: number) => {
    switch (e) {
      case 0:
        setSelectedMovement(e);

        break;

      case 1:
        setSelectedMovement(e);
        break;

      case 2:
        setSelectedMovement(e);
        break;

      case 3:
        setSelectedMovement(e);

        break;

      default:
        setSelectedMovement(e);
    }
  };
  return (
    <div>
      <div className="navbar bg-white">
        <div className="navbar-start">
          <div
            className={selectedMovement === 0 ? "movement-active" : "movement"}
            onClick={() => handleSelectMovement(0)}
          >
            كل الحركات
          </div>
          <div
            className={selectedMovement === 1 ? "movement-active" : "movement"}
            onClick={() => handleSelectMovement(1)}
          >
            الحركات المدينة فقط
          </div>
          <div
            className={selectedMovement === 2 ? "movement-active" : "movement"}
            onClick={() => handleSelectMovement(2)}
          >
            الحركات الدائنة فقط
          </div>
          <div
            className={selectedMovement === 3 ? "movement-active" : "movement"}
            onClick={() => handleSelectMovement(3)}
          >
            الأرصدة المستحقة فقط
          </div>
        </div>
        <div className="navbar-end">
          <DatePicker
            inputClass="filterWallet"
            value={values}
            dateSeparator="الي"
            //onChange={setValues}
            range
            rangeHover
            //animations={[opacity(), transition({ from: 35, duration: 800 })]}
          />
        </div>
      </div>
    </div>
  );
};
