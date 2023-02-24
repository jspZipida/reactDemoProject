import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeName } from "../store";


const Cart = () => {

    let cart = useSelector((state)=>{
        return state.cart
    })

    let user = useSelector((state)=>{
        return state.user
    })

    let dispatch = useDispatch()


  return (
    <>
      <h6>{user.name}의 장바구니</h6>


      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((value,i) => {
            return (
              <tr key={i}>
                <td>1</td>
                <td>{cart[i].name}</td>
                <td>{cart[i].count}</td>
                <td><button onClick={()=>{dispatch(changeName())}}>+</button></td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default Cart;
