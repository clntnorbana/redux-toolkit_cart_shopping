import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartDetail from "./CartDetail";
import { clearCart, selectAllCartItems } from "./cartSlice";

const CartList = () => {
  const cartItems = useSelector(selectAllCartItems);

  const dispatch = useDispatch();

  const subTotal = cartItems.reduce((total, currentVal) => {
    const totalItemPrice = currentVal.quantity * currentVal.price;
    return Math.round(total + totalItemPrice);
  }, 0);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="cart-list">
      <div className="container">
        {cartItems.length === 0 ? (
          <span className="cart-empty">
            <p className="empty-text">Your cart is empty</p>
            <Link to="/">
              <p className="back-to-shopping">back to shopping</p>
            </Link>
          </span>
        ) : (
          <>
            <div className="cartItems">
              <h2>Your Cart</h2>
              <table>
                <thead>
                  <tr>
                    <th>product</th>
                    <th>price</th>
                    <th>quantity</th>
                    <th>total</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((cartItem) => (
                    <CartDetail cartItem={cartItem} key={cartItem.id} />
                  ))}
                </tbody>
              </table>
              <div className="cart-bottom">
                <button
                  className="clear-cart_btn"
                  type="button"
                  onClick={handleClearCart}
                >
                  clear cart
                </button>
                <div className="checkout">
                  <div className="subtotal">
                    <p>subtotal</p>
                    <p>USD {subTotal}</p>
                  </div>
                  <button className="check-out_btn" type="button">
                    check out
                  </button>
                  <Link to="/">
                    <p className="back-to-shopping">back to shopping</p>
                  </Link>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartList;
