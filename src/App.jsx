// import { useState } from "react";
import { Routes,Route } from "react-router-dom";
// import {Ro}
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Error from "./Pages/Error";
import Class from "./Pages/Class";
import Formik from "./Pages/Formik";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Class" element={<Class />} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Formik" element={<Formik/>} />
        <Route path="*" element={<Error/>} />

      
      </Routes>
    </>
  );
}

export default App;
