import { BsCart } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectAllCartItems } from "../app/features/cart/cartSlice";

const Header = () => {
  const cartItems = useSelector(selectAllCartItems);
  const cartCount = cartItems.length;

  return (
    <header>
      <div className="container">
        <Link to="/">
          <h2>add to cart</h2>
        </Link>
        <Link to="/cart">
          <i className="cart-icon">
            <BsCart />
            <span className="quantity">{cartCount}</span>
          </i>
        </Link>
      </div>
    </header>
  );
};

export default Header;
