import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contributer from "./components/contributer/Contributer";
import Faq from "./components/faq/Faq";
import Header from "./components/header/Header";
import HowItWorks from "./components/howItWorks/HowItWorks";
import Navbar from "./components/navbar/Navbar";
import UpcomingContest from "./components/upcomingContest/UpcomingContest";
import "./App.css"; // Import your CSS file here
import Login from "./components/login/Login";
import SignUp from "./components/signup/SignUp";
import Profile from "./components/Profile/Profile";
import Analyze from "./components/Analyze/Analyze";
import ForgetPassword from "./components/forgetPassword/ForgetPassword";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<Layout />} />
      </Routes>
    </Router>
  );
}

function Layout() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <HowItWorks />
              <Contributer />
              <Faq />
            </>
          }
        />
        <Route path="/contest" element={<UpcomingContest />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/analyze" element={<Analyze />} />
        <Route path="/contributor" element={<Contributer />} />
        <Route path="/howitworks" element={<HowItWorks />} />
        <Route path="/forget" element={<ForgetPassword />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
