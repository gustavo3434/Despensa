import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Cart from "./components/Cart"
import Footer from "./components/Footer"

function App() {
  return (
      <BrowserRouter>
        <div>
          <NavBar/>
          <Routes>
            <Route path={"/"} element={<div><ItemListContainer/> <Footer/></div>}/>
            <Route path={`/carrito`} element={<Cart/>}/>
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
