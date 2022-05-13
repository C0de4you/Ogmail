import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { PrivateRoute, LoginPage }  from '../features/auth/index';
import { LetterList, MailBoxPage, LetterPage } from "../features/mailbox/index";

function RootRouter() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/mailbox/*" element={<PrivateRoute><MailBoxPage /></PrivateRoute>}>
        <Route path=":Box" element={<LetterList />} />
        <Route path="letter/:id" element={<LetterPage />} />
      </Route>
      <Route path="*" element={<Navigate to='/' />} />
    </Routes>
  )
}

export default RootRouter;