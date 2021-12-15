import React from 'react'
import {
  Route,
  Navigate,
} from "react-router-dom";

// hook
import Autorization from './pages/autorization/Autorization'
import Registration from './pages/registration/Registration';
import Dashboard from './pages/dashboard/Dashboard';
export const useRoutes = (isLogin, userEmail) => {
  console.log(isLogin);
  if (isLogin) {
    return (
      <>
        <Route path="/dashboard" element={<Dashboard email={userEmail} />} />
        <Route path="/autorization" element={<Navigate replace to="/dashboard" />} />
        <Route path="/registration" element={<Navigate replace to="/dashboard" />} />
      </>
    )
  }

  return (
  <>
    <Route path="/registration" element={<Registration/>} />
    <Route path="/autorization" element={<Autorization/>} />
    <Route path="/dashboard" element={<Navigate replace to="/autorization" />} />
  </>
  )
}