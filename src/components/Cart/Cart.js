import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = props => {
  const quantity = useSelector(state => state.cart.quantity);
  const totalPrice = useSelector(state =>
    state.cart.items.reduce((a, b) => a + b.price, 0)
  );

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        <CartItem
          item={{
            title: "Test Item",
            quantity: quantity,
            total: totalPrice,
            price: 6,
          }}
        />
      </ul>
    </Card>
  );
};

export default Cart;
