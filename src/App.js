import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Navbar/Header";
import Sidebar from "./components/Navbar/Sidebar";
import Login from "./pages/login";
import Register from "./pages/register";
import LandingPage from "./pages/landingPage";
import Courses from "./pages/courses";
import Blog from "./pages/blog";
import Partners from "./pages/partners";
import Startups from "./pages/startups";
import Footer from "./components/footer";
import UploadBioData from "./pages/uploadBiodata";
import VerifyEmailPage from "./pages/verfityEmail";
import AdminDashboard from "./pages/adminDashboard";

import EmailVerified from "./pages/verfityEmail/EmailVerified";
import DashBoard from "./pages/adminDashboard/DashBoard";
import User from "./pages/adminDashboard/User";
import Payment from "./pages/adminDashboard/Payments";
import Profile from "./pages/adminDashboard/Profile";
import Settings from "./pages/adminDashboard/Settings";
import Message from "./pages/adminDashboard/Message";
import StudentDashboard from "./pages/studentDashboard";
import UserData from "./pages/studentDashboard/UserData";
import MakePayment from "./pages/studentDashboard/MakePayment";
// import StartLearning from "./pages/studentDashboard/StartLearning";
import ContentPage from "./pages/studentDashboard/ContentPage";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      <Router>
        <Header toggle={toggle} />
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/startups" element={<Startups />} />
          <Route path="/biodata" element={<UploadBioData />} />
          <Route path="/check-email" element={<VerifyEmailPage />} />
          <Route path="/verify-email/:id/:token" element={<EmailVerified />} />
          <Route path="/admin" element={<AdminDashboard />}>
            <Route path="dashboard" element={<DashBoard />} />
            <Route path="users" element={<User />} />
            <Route path="payments" element={<Payment />} />
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
            <Route path="messages" element={<Message />} />
          </Route>
          <Route path="/student" element={<StudentDashboard />}>
            <Route path="user-data" element={<UserData />} />
            <Route path="make-payment" element={<MakePayment />} />
            <Route path="start-learning" element={<ContentPage />} />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
