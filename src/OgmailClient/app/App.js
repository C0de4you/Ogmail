import React from "react";
import LettersSection from "../features/letters/LettersSection";
import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import PrivateRoute from '../features/auth/PrivateRouter'
import LoginPage from "../features/auth/LoginPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/mailbox/*" element={
        <PrivateRoute>
          <LettersSection />
        </PrivateRoute>
      } />
      <Route path="*" element={<Navigate to='/' />} />
    </Routes>
  )
}

export default App;