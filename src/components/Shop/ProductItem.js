import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { ADD_TO_CART, shopActions } from "../../store";
import Card from "../UI/Card";
import classes from "./ProductItem.module.css";

const ProductItem = props => {
  const { title, price, description } = props;
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  console.log(cart);

  const onAddToCartHandler = () => {
    dispatch(shopActions.addToCart({ title, price, description }));
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={onAddToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
