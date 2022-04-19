import React from "react";
import Messages from "./Messages";
import LoginPage from "./LoginPage";
import {
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="message/*" element={<Messages />} />
    </Routes>
  )
}

export default App;


// Пися