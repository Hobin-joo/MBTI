import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Profile from "../pages/Profile";
import TestPage from "../pages/TestPage";
import TestResult from "../pages/TestResult";
import TestResultList from "../pages/TestResultList";
import Home from "../pages/Home";
import { ProtectedRoute } from "../pages/ProtectedRoute";
import Layout from "../pages/Layout";

const Router = () => {
  const [user, setUser] = useState("");

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Home />} />
            <Route
              path="/profile"
              element={<Profile user={user} setUser={setUser} />}
            />
            <Route path="/testPage" element={<TestPage />} />
            <Route path="/testResult" element={<TestResult />} />
            <Route path="/testResultList" element={<TestResultList />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
