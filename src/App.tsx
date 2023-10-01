import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Pages/Home/Home";
import About from "./components/Pages/About/About";
import Clicker from "./components/Pages/Clicker/Clicker";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/*" element={<>
            <Home />
          </>} />
          <Route path="/about/*" element={<>
            <About />
          </>} />
          <Route path="/clicker/*" element={<>
            <Clicker />
          </>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
