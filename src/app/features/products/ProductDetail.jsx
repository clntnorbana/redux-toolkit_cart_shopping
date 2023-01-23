import { useDispatch } from "react-redux";
import { addToCart } from "../cart/cartSlice";

const ProductDetail = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="product">
      <div className="img-container">
        <img src={product.img} alt={product.title} />
      </div>
      <div className="body">
        <p className="title">{product.title}</p>
        <p className="price">USD {product.price}</p>
      </div>
      <button
        className="btn_add-to-cart"
        type="button"
        onClick={() => handleAddToCart(product)}
      >
        add to cart
      </button>
    </div>
  );
};

export default ProductDetail;
