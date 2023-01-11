import NavBar from "./Components/NavBar"
import './App.css';
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from './Pages/HomePage';
import MoviesDetails from './Pages/MoviesDetails';

function App() {

  const [search, setSearch] = useState("")

  return (
    <>
    <NavBar setSearch={setSearch} />
      <Routes>
        <Route path='/' element={<HomePage search={search} />} />
        <Route path='/movies/:movieId' element={<MoviesDetails />} />
        <Route path='*' element={<h1>404 Not Found Page</h1>} />
      </Routes>
      </>
  );
}

export default App;
