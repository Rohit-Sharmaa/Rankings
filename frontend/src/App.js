import { lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PieChart from "./components/Charts/PieChart";

const Footer = lazy(() => import("./components/Footer/Footer"));
const Header = lazy(() => import("./components/header/Header"));
const UpcomingContest = lazy(() =>
  import("./components/upcomingContest/UpcomingContest")
);
const About = lazy(() => import("./components/About/About"));
const Login = lazy(() => import("./components/login/Login"));
const SignUp = lazy(() => import("./components/signup/SignUp"));
const Profile = lazy(() => import("./components/Profile/Profile"));
const Analyze = lazy(() => import("./components/Analyze/Analyze"));
const ForgetPassword = lazy(() =>
  import("./components/forgetPassword/ForgetPassword")
);
const Contributer = lazy(() => import("./components/contributer/Contributer"));
const HowItWorks = lazy(() => import("./components/howItWorks/HowItWorks"));
const Faq = lazy(() => import("./components/faq/Faq"));

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
        <Route path="/about" element={<About />} />
        <Route path="/chart" element={<PieChart />} />
      </Routes>
      <Footer />

      <ToastContainer />
    </>
  );
}

export default App;
