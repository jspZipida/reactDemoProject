import "../App.css";
import { useState } from "react";
import exportData from "../data";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";



const Card = ({shoes, i}) => {
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



const Main = ()=>{
    let [shoes, setShoes] = useState(exportData);
    const navigate = useNavigate();


    return(
        <>
              <div className="main-bg"></div>
              <div className="App">
                <div className="container">
                  <div className="row">
                    {shoes.map((a, index) => {
                      const idx = index + 1;
                      return (
                        <div onClick={() => navigate(`/detail/${index}`)}>
                          <Card
                            shoes={shoes[index]}
                            i={idx}
                            key={index}
                          ></Card>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </>
    )
}

export default Main;