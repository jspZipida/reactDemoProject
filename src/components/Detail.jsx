import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";



let YellowBtn = styled.button` 
  background : ${ props => props.bg };
  color : ${ props => props.bg == 'red' ? 'white' : 'black' };
  padding : 10px; 
`; 

let Box = styled.div`
  padding : 20px;
  color : grey
`;


function Detail(props) {
  let { id } = useParams();
//   console.log(typeof(id));
  const num = parseInt(id) + 1;
  const [alert, setAlert] = useState(true);


  useEffect(()=>{
    setTimeout(()=>{ setAlert(false) }, 10000)
  }, [])

  return (
    <div className="container">
        {
            alert == true
            ?   <div className="alert alert-warning">
                    2초이내 구매시 할인
                </div>
            : null
        }


        <Box>
            <YellowBtn bg={"red"}>버튼</YellowBtn>
        </Box>
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
    </div>
  );
}

export default Detail;
