import "../App.css";
import { useState } from "react";
import exportData from "../data";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import { Calendar, ConfigProvider } from 'antd';

const Calendars = () => {
  let [shoes, setShoes] = useState(exportData);
  const navigate = useNavigate();

  const onPanelChange = (value, mode) => {
    console.log(value.format('YYYY-MM-DD'), mode);
  };

  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#ffffff",
            colorBorder: "#000000",
            colorBgBase: "#454545",
            colorPrimaryBg: "#687070",
            colorText: "#ffffff",
            colorTextQuaternary: "#878787",
            colorBorderSecondary: "#262626",
          },
        }}
      >
        <Calendar onPanelChange={onPanelChange} style={{}} />
      </ConfigProvider>
    </>
  );
};

export default Calendars;
