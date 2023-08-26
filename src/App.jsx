import "./App.css";
import Home from './components/home/Home';
import Header from './components/header/Header'
import Details from './components/Details';
import { Routes, Route } from "react-router-dom";

export default function App() {

  return (
    <>
      <Routes>
      <Route path="/" element={[<Header />, <Home />,]} />
        {/* <Route path="/addPuppy" element={<Form />} /> */}
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </>
  );
}