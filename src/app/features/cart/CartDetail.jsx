import { useDispatch } from "react-redux";
import { addToCart, decreaseQuantity, removeFromCart } from "./cartSlice";

const CartDetail = ({ cartItem }) => {
  const dispatch = useDispatch();

  const handleRemoveProduct = (cartItem) => {
    dispatch(removeFromCart(cartItem));
  };

  const handleDeceaseProduct = (cartItem) => {
    dispatch(decreaseQuantity(cartItem));
  };

  const handleIncreaseProduct = (cartItem) => {
    dispatch(addToCart(cartItem));
  };

  return (
    <tr>
      <td className="cart-product">
        <img src={cartItem.img} alt={cartItem.title} />
        <div className="cart-product-body">
          <h3>{cartItem.title}</h3>
          <button
            onClick={() => handleRemoveProduct(cartItem)}
            className="cart-remove"
            type="button"
          >
            remove
          </button>
        </div>
      </td>
      <td className="price">{Math.round(cartItem.price)}</td>
      <td className="quantity">
        <div className="quantity-container">
          <button type="button" onClick={() => handleDeceaseProduct(cartItem)}>
            -
          </button>
          {cartItem.quantity}
          <button type="button" onClick={() => handleIncreaseProduct(cartItem)}>
            +
          </button>
        </div>
      </td>
      <td className="total-product-price">
        USD {Math.round(cartItem.quantity * cartItem.price)}
      </td>
    </tr>
  );
};

export default CartDetail;
