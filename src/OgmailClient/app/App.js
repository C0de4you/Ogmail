import React from "react";
import LettersSection from "../features/letters/LettersSection";
import LoginSection from "../features/auth/LoginPage";
import {
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginSection />} />
      <Route path="/mailbox/*" element={<LettersSection />} />
    </Routes>
  )
}

export default App;