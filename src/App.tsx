import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Pages/Home/Home";
import About from "./components/Pages/About/About";
import Clicker from "./components/Pages/Clicker/Clicker";
import Pointer from "./components/Pages/Pointer/Pointer";
import Profiles from "./components/Pages/Profiles/Profiles";

interface ProfileType {
  name: string
  age: number | null
}

const Profile: ProfileType[] = [
  {name: 'Alice', age: 30},
  {name: 'Bob', age: 26},
  {name: 'Adam', age: 23},
];

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
          <Route path="/pointer/*" element={<>
            <Pointer number={0} />
          </>} />
          <Route path="/profiles/*" element={<>
            <Profiles
              render={(profile, i) => (
                <>
                  <p>{profile.name}</p>
                  <p>{profile.age}</p>
                </>
              )}
              profiles={Profile} />
          </>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
