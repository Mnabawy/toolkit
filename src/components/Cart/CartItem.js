import { useDispatch } from "react-redux";
import { DECREMENT, INCREMENT, shopActions } from "../../store";
import classes from "./CartItem.module.css";

const CartItem = props => {
  const { title, quantity, total, price } = props.item;

  const dispatch = useDispatch();

  const onIncrementHandler = () => {
    dispatch(shopActions.increment());
  };
  const onDecrementHandler = () => {
    dispatch(shopActions.decrement());
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={onDecrementHandler}>-</button>
          <button onClick={onIncrementHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
