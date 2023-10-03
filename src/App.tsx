import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Pages/Home/Home";
import About from "./components/Pages/About/About";
import Clicker from "./components/Pages/Clicker/Clicker";
import Pointer from "./components/Pages/Pointer/Pointer";
import Profiles from "./components/Pages/Profiles/Profiles";
import UserList from "./components/UserList";

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
            <Pointer title="any str" number={0} />
          </>} />
          <Route path="/profiles/*" element={<>
            <Profiles profiles={Profile} />
          </>} />
          <Route path="/userlist/*" element={<>
            <UserList />
          </>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
