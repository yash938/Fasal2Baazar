import React, { useState } from "react";
import Navbar from "./Navbar"; 
import HomePage from "./HomePage";
import AboutPage from "./AboutUsPage";
import Calculator from "./PricePage";
import Contact from "./ContactUs";
import Footer from "./Footer";
import Abouts from "./AboutUsmain";
import Contacts from "./Contact";
import Login from "./Login";
import SignupPage from "./Signup";
import Services from "./services";

const App = () => {
  const [currentPage, setCurrentPage] = useState("default");

  const renderPage = () => {
    switch (currentPage) {
      case "aboutus":
        return <Abouts />;
      case "services":
        return <Services />;
      case "contactus":
        return <Contacts />;
        case "login":
          return <Login setCurrentPage={setCurrentPage} />;
        case "signup":
          return <SignupPage setCurrentPage={setCurrentPage} />;
      case "default":
      default:
        return (
          <>
            <HomePage />
            <AboutPage />
            <Calculator />
            <Contact />
          </>
        );
    }
  };

  return (
    <div>
      <Navbar setCurrentPage={setCurrentPage} />
      <main className="p-2">{renderPage()}</main>
      <Footer />
    </div>
  );
};

export default App;

