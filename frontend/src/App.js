import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contributer from "./components/contributer/Contributer";
import Faq from "./components/faq/Faq";
import Header from "./components/header/Header";
import HowItWorks from "./components/howItWorks/HowItWorks";
import Navbar from "./components/navbar/Navbar";
import UpcomingContest from "./components/upcomingContest/UpcomingContest";
import "./App.css"; // Import your CSS file here

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
      </Routes>
    </>
  );
}

export default App;
