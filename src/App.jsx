import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./toastStyles.css";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import { Routes, Route } from "react-router-dom";
import Home from "./components/Main/Main";
import About from "./pages/AboutPage";
import Skills from "./pages/SkillsPage";
import Projects from "./pages/ProjectsPage";
import Contacts from "./pages/ContactsPage";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import ScrollPadding from "./components/ScrollPadding/ScrollPadding";
import Snowfall from "./components/Snowfall/Snowfall";

function App() {
  return (
    <>
    <Snowfall />
    <ScrollPadding />
      <Header />

      <main className="page">
          <ScrollToTop />
        <Routes>
          
          <Route path="/" element={<Home />} />        
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </main>

      <Footer />

      <ToastContainer position="bottom-right" autoClose={3000} theme="light" />
    </>
  );
}

export default App;
