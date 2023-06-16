import { Route, Routes } from "react-router";
import "./App.css";
import Header from "./Component/Header";
import Home from "./Component/Home";
import Booklist from "./Component/Booklist";
import Cart from "./Component/Cart";
import About from "./Component/About";
import Checkout from "./Component/Checkout";
import OrderList from "./Component/OrderList";

function App() {
  return (
    <div className="App">
      <Header />
      <div style={{ marginTop: "125px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booklist" element={<Booklist />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/orderlist" element={<OrderList />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
