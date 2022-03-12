import './App.css';
import './assets/style.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './frontend/Home';
import About from './frontend/About';
import Contact from './frontend/Contact';
import Header from './frontend/includes/Header';
import Login from './frontend/Login';
import Registration from './frontend/Registration';
import Footer from './frontend/includes/Footer';
import CartList from './frontend/CartList';
import Product from './frontend/Product';
import Checkout from './frontend/Checkout';
// import CartList from './frontend/CartList';

function App() {
  return (
    <BrowserRouter>
      <Header/>
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="cartlist" element={<CartList />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Registration />} />
            <Route path="product" element={<Product />} />
            <Route path="checkout" element={<Checkout />} />
          </Route>
        </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
