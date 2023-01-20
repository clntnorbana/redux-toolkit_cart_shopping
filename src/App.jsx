import ProductsList from "./app/features/products/ProductsList";
import CartList from "./app/features/cart/CartList";

import Header from "./components/Header";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <main>
      <Router>
        <ToastContainer />
        <Header />
        <Routes>
          <Route path="/" exact element={<ProductsList />} />
          <Route path="/cart" element={<CartList />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
