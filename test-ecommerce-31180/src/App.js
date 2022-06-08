import './App.css';
import './test.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar'
import Home from './pages/Home';
import Contacto from './pages/Contacto'
import NotFound from './pages/NotFound';
import Detalle from './pages/Detalle';
import ProductList from './pages/ProductList';
import ThemeProvider from './context/ThemeContext'
import { CartProvider } from './context/CartContext';
import Cart from './pages/Cart';

function App() {
  return (
    //JSX
    <div className="App">
      <CartProvider>
        <ThemeProvider >
          <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path='/contact' element={<Contacto />}/>  
                <Route path='/cart' element={<Cart />} />
                <Route path='/product/:id' element={<Detalle />} />
                <Route path='/products/:category' element={<ProductList />}/>  
                <Route path='/' element={<Home />}/>  
                <Route path='*' element={<NotFound />}/>  
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </CartProvider>
    </div> 

  );
}

export default App;
