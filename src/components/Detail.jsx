import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Navbar, Container, Nav } from "react-bootstrap";


let YellowBtn = styled.button`
  background: ${(props) => props.bg};
  color: ${(props) => (props.bg == "red" ? "white" : "black")};
  padding: 10px;
`;

let Box = styled.div`
  padding: 20px;
  color: grey;
`;

function Detail(props) {
  let { id } = useParams();
  //   console.log(typeof(id));
  const num = parseInt(id) + 1;
  const [alert, setAlert] = useState(true);
  const [tab , setTab] = useState(0);


  useEffect(() => {
    setTimeout(() => {
      setAlert(false);
    }, 10000);
  }, []);

  return (
    <div className="container">
      {alert == true ? (
        <div className="alert alert-warning">2초이내 구매시 할인</div>
      ) : null}

      <div className="row">
        <div className="col-md-6">
          <img
            src={`https://codingapple1.github.io/shop/shoes${num}.jpg`}
            width="100%"
          />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{props.shoes[id].title}</h4>
          <p>{props.shoes[id].content}</p>
          <p>{props.shoes[id].price}</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>


      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link onClick={()=>{ setTab(0) }} eventKey="link0">버튼0</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={()=>{ setTab(1) }} eventKey="link1">버튼1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={()=>{ setTab(2) }} eventKey="link2">버튼2</Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent tab={tab}/>
      
    </div>
  );
}

function TabContent({tab}){
  let [fade, setFade] = useState('')

  useEffect(()=>{
    setTimeout(()=>{ setFade('end') }, 100)
  return ()=>{
    setFade('')
  }
  }, [tab])

  return (
    <div className={'start ' + fade}>
      { [<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tab] }
    </div>
  )
}

export default Detail;
