import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductDetail from "./ProductDetail";

import { fetchProducts, isLoading, selectAllProducts } from "./productsSlice";

const ProductsList = () => {
  const dispatch = useDispatch();

  const products = useSelector(selectAllProducts);
  const loading = useSelector(isLoading);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className="product-list">
      <div className="container">
        {loading ? (
          "loading..."
        ) : (
          <>
            {products.map((product) => (
              <ProductDetail key={product.id} product={product} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default ProductsList;
