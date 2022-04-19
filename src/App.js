import React from "react";
import Messages from "./Messages";
import LoginPage from "./LoginPage";
import {
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="message/*" element={<Messages />} />
    </Routes>
    </React.Suspense>
  )
}

export default App;