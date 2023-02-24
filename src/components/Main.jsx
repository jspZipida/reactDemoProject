import "../App.css";
import { useState } from "react";
import exportData from "../data";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import { ConfigProvider, Avatar, List, Divider, Typography } from "antd";

const data = [
  "Racing car sprays burning fuel into crowd.",
  "Japanese princess to wed commoner.",
  "Australian walks 100km after outback crash.",
  "Man charged over missing wedding girl.",
  "Los Angeles battles huge wildfires.",
  "Los Angeles battles huge wildfires.",
  "Los Angeles battles huge wildfires.",
  "Los Angeles battles huge wildfires.",
  "Los Angeles battles huge wildfires.",
  "Los Angeles battles huge wildfires.",
  "Los Angeles battles huge wildfires.",
  "Los Angeles battles huge wildfires.",
  "Los Angeles battles huge wildfires.",
  "Los Angeles battles huge wildfires.",
];

const customTheme = {
  primaryColor: "#f0f0f0", // set the primary color to a light grey
};

const Card = ({ shoes, i }) => {
  return (
    <div className="col-md-4">
      <img
        src={`https://codingapple1.github.io/shop/shoes${i}.jpg`}
        width="80%"
      />
      <h4>{shoes.title}</h4>
      <p>{shoes.price}</p>
    </div>
  );
};

const Main = () => {
  let [shoes, setShoes] = useState(exportData);
  const navigate = useNavigate();

  return (
    <ConfigProvider theme={customTheme}>
      <div className="main-bg">
        <div className="container">
          <div className="row">
            {shoes.map((a, index) => {
              const idx = index + 1;
              return (
                <div onClick={() => navigate(`/detail/${index}`)} key={index}>
                  <Card shoes={shoes[index]} i={idx}></Card>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <List
        header={<div>Home</div>}
        // footer={<div>Footer</div>}
        style={{
          backgroundColor: "#454545",
          borderColor: "#454545",
          color: "#ffffff",
        }}
        dataSource={data}
        renderItem={(item) => (
          <List.Item
            style={{
              color: "#ffffff",
              height: "100px",
            }}
          >
            <Typography.Text mark>[ITEM]</Typography.Text> {item}
          </List.Item>
        )}
      />
    </ConfigProvider>
  );
};

export default Main;
