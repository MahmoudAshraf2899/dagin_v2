import React, { useState } from "react";
import notifcationIcon from "./Assets/images/bell.svg";
import avatar from "./Assets/images/UserImg.svg";
import "./Styles/Header.css";
import { WalletsHeader } from "../Wallets/WalletsHeader";
import { Wallets } from "../Wallets/Wallets";
import { MissionsHeader } from "../Missions/MissionsHeader";
import { Missions } from "../Missions/Missions";

type HeaderProps = {
  title: string;
  id: number;
  onDataReceived: (data: number) => void;
};

export const Header = (props: HeaderProps) => {
  const [parentData, setParentData] = useState<number>(0); // State to hold the data

  // Callback function to receive data from the child component
  const onDataReceivedFromChild = (data: number) => {
    setParentData(data);
  };
  return (
    <div className="flex flex-col w-full">
      <div className="navbar bg-white">
        <div className="navbar-start">
          <a className="navbar-item header-title">{props.title}</a>
        </div>
        <div className="navbar-end">
          <input className="input search-input" placeholder="ابحث" />

          <div className="navbar-item notificationIcon">
            <img src={notifcationIcon} alt="notification icon" />
            <div className="notificationDot">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="8"
                viewBox="0 0 8 8"
                fill="none"
              >
                <circle
                  cx="4"
                  cy="4"
                  r="3.5"
                  fill="url(#paint0_linear_1692_2585)"
                  stroke="white"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1692_2585"
                    x1="4"
                    y1="0"
                    x2="4"
                    y2="8"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#257659" />
                    <stop offset="1" stop-color="#124734" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
          <label
            className="whites mx-2 flex h-fit cursor-pointer p-0"
            tabIndex={0}
          >
            <div className="flex flex-row">
              <div className="avatar avatar-md">
                <img src={avatar} alt="avatar" />
              </div>

              <div className="flex flex-col">
                <span className="user-name">رحمة محمد</span>
                <span className="text-xs font-normal text-content2 user-role">
                  ادمن
                </span>
              </div>
            </div>
          </label>
          <div className="navbar-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
            >
              <path
                d="M4 6.5L8 10.5L12 6.5"
                stroke="#94A3B8"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
      {props.id === 6 ? (
        <WalletsHeader />
      ) : props.id === 1 ? (
        <MissionsHeader onDataReceived={onDataReceivedFromChild} />
      ) : null}

      {/* Expand Button */}
      <div className="w-fit">
        <label
          htmlFor="sidebar-mobile-fixed"
          className="btn btn-primary sm:hidden"
        >
          Open Sidebar
        </label>
      </div>
      {/* Content */}
      <div className="w-full h-full content">
        {props.id === 6 ? (
          <Wallets />
        ) : props.id === 1 ? (
          <Missions type={parentData} />
        ) : null}
      </div>
    </div>
  );
};
