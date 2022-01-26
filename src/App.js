import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./screens/LandingPage";
import Login from "./Login";
import Register from "./Register";
import Todo from "./Todo";


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Login />} exact></Route>
          <Route path="/login" element={<Login />} exact></Route>
          <Route path="/register" element={<Register />} exact></Route>
          <Route path="/todo" element={<Todo />} exact></Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
