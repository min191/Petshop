import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Component/HeaderComponent';
import Footer from './Component/FooterComponent';
import Home from './Page/Home';
import About from './Page/About';
import Cart from './Page/Cart';
import SignUp from './Page/SignUp-LogIn/SignUp';
import LogIn from './Page/SignUp-LogIn/LogIn';
import Contact from './Page/Contact';
import Shop from './Page/Shop';
import DetailPage from './Page/Detail/indx';
import CartProvider from './Component/CartProvider';
import CheckOutPopUp from './Component/PopUp/checkOut';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/LogIn" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="*" element={<h1>404 Not Found!</h1>} />
        </Routes>
        <Footer />
      </CartProvider>

    </div>
  );
}

export default App;
