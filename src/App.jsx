import "./App.css";
import Home from './components/home/Home';
import Header from './components/header/Header'
import Details from './components/product/Details';
import { Routes, Route } from "react-router-dom";

export default function App() {

  return (
    <>
      <Routes>
      <Route path="/" element={[<Header key='1'/>, <Home key='2'/>]} />
        <Route path="/details/:id" element={[<Header key='1'/>, <Details key='2'/>]} />
      </Routes>
    </>
  );
}