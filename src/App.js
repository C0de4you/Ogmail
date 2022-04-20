import React from "react";
import Messages from "./MessagesSection/MessagesSection";
import LoginSection from "./LoginSection";
import {
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginSection />} />
      <Route path="/messages/*" element={<Messages />} />
    </Routes>
  )
}

export default App;