import "./App.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useEffect, useState } from "react";
import exportData from "./data";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Detail from "./components/Detail";
import Calendars from "./components/Calendar";
import About from "./components/About";
import Cart from "./components/Cart";
import Main from "./components/Main";
import { Calendar, ConfigProvider, Button } from "antd";
import axios from "axios";

const URL = "https://codingapple1.github.io/shop/data2.json";

function callList() {}

function App() {
  const navigate = useNavigate();
  let [shoes, setShoes] = useState(exportData);

  // useEffect(()=>{
  //   axios
  //   .get(url)
  //   .then((res)=>{
  //     if(shoes.length <= 6){
  //       for(let i of res.data){
  //         shoes.push(i)
  //       }
  //     console.log(shoes)
  //     }
  //   })
  //   .catch(()=>{
  //     console.log("fail")
  //   })
  // }, [shoes])

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">FINDME</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/calendar">Calendar</Nav.Link>
            <Nav.Link href="/main">Main</Nav.Link>
            <Nav.Link href="/about">About us</Nav.Link>
            <Nav.Link href="/cart">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Button
        type="primary"
        onClick={() => {
          axios
            .get(URL)
            .then((res) => {
              let copy = [...shoes, ...res.data];
              setShoes(copy);
            })
            .catch(() => {
              console.log("fail");
            });
        }}
      >
        trigger
      </Button>


      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/" element={<Main />} />
        <Route path="/calendar" element={<Calendars />} />
        <Route path="/detail/:id" element={<Detail shoes={shoes}/>} />
        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>멤버들</div>} />
          <Route path="location" element={<div>회사위치</div>} />
        </Route>
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
