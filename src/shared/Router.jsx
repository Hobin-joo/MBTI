import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Profile from "../pages/Profile";
import TestPage from "../pages/TestPage";
import TestResult from "../pages/TestResult";
import TestResultList from "../pages/TestResultList";
import Home from "../pages/Home";

const Router = () => {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        {/* <Routes> */}
        <Route path="/" element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="testPage" element={<TestPage />} />
        <Route path="testResult" element={<TestResult />} />
        <Route path="testResultList" element={<TestResultList />} />
        {/* </Routes> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
