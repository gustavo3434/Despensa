import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
      <BrowserRouter>
        <div>
          <NavBar/>
          <ItemListContainer/>
          <Routes>
            <Route path={"/"} element={""}/>
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
