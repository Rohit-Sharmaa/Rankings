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
import Loader from "./components/Loader/loader";
import { useSelector } from "react-redux";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/*" element={<Layout />} />
        </Routes>
      </Router>
    </>
  );
}

function Layout() {
  const { loader } = useSelector((state) => state.loader);

  return (
    <div>
      <div>{loader && <Loader />} </div>
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
      </Routes>
    </div>
  );
}

export default App;
