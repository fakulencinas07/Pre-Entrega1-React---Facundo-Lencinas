import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">

      <Navbar  />

      <ItemListContainer greeting={"Proximamente se viene la tienda!"} />
    </div>
  );
}

export default App;
