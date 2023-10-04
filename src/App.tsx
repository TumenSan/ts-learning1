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
        <div className="block rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-700 dark:text-neutral-50 text-green-700 border-t-2 border-b my-5">Hello world</div>
        <div className="container w-80 mt-5 mx-auto bg-green-200 rounded-xl shadow">
         <div className="text-3xl p-8 text-green-700 font-bold mb-5">
           Welcome!
           <p className="text-green-500 mt-3 text-lg">
             I am learning Tailwind CSS
           </p>
         </div>
       </div>
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
