import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Cart from './pages/cart';
import Header from './components/header';
import Footer from './components/footer';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
