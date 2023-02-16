import "./App.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useState } from "react";
import exportData from "./data";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Detail from "./components/Detail";
import About from "./components/About";
import Main from "./components/Main";
import { Calendar, ConfigProvider } from 'antd';


function App() {
  const navigate = useNavigate();
  let [shoes, setShoes] = useState(exportData);

  const onPanelChange = (value, mode) => {
    console.log(value.format('YYYY-MM-DD'), mode);
  };

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">FINDME</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Calender</Nav.Link>
            <Nav.Link href="/about">About us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#ffffff",
            colorBgBase:"#2e3030",
            colorPrimaryBg:"#687070",
            colorText:"#ffffff"
          },
        }}
      >
        <Calendar onPanelChange={onPanelChange} style={{}} />
      </ConfigProvider>

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />
        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>멤버들</div>} />
          <Route path="location" element={<div>회사위치</div>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
