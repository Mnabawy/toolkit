import { useDispatch } from "react-redux";

import { shopActions, TOGGLE_CART } from "../../store/index";
import classes from "./CartButton.module.css";

const CartButton = props => {
  const dispatch = useDispatch();

  const toggleCartHandler = () => {
    dispatch(shopActions.toggleShopingCart());
  };

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
