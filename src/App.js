import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Newnavbar from './components/Newnavbar/Newnavbar';
import Maincomp from './components/home/Maincomp';
import Footer from './components/Footer/Footer'
import { Routes, Route } from 'react-router-dom';
import Sign_in from './components/signup_signin/Sign_in';
import Signup from './components/signup_signin/Signup';
import Cart from './components/cart/Cart';
import Buynow from './components/buynow/Buynow';




function App() {
  return (
    <div className="App">
      <Navbar />
      <Newnavbar />
      <Routes>
        <Route path='/' element={<Maincomp />} />
        <Route path='/login' element={<Sign_in />} />
        <Route path='/register' element={<Signup />} />
        <Route path='/getproductsone/:id' element={<Cart />} />
        <Route path='/buynow' element={<Buynow />} />
      </Routes>
      {/* <Maincomp/> it is set at Route path*/}
      <Footer />
    </div>
  );
}

export default App;
