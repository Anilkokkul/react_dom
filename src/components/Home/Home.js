import React from "react";
import Products from "../Products/Products";
import FullStack from "../FullStack/FullStack";
import DataScience from "../DataScience/DataScience";
import CyberSecurity from "../CyberSecurity/CyberSecurity";
import Carrier from "../Carrier/Carrier";
import { Routes, Route, Link } from "react-router-dom";
import "./home.css";

function Home() {
  return (
    <>
      <div className="nav-container">
        <div>
          <Link to="/">All</Link>
        </div>
        <div>
          <Link to="/fullstack">Full Stack Development</Link>
        </div>
        <div>
          <Link to="/datascience">Data Science</Link>
        </div>
        <div>
          <Link to="/cybersecurity">Cyber Security</Link>
        </div>
        <div>
          <Link to="/carrier">Carrier</Link>
        </div>
      </div>
      <Routes>
        <Route path="" element={<Products />} />
        <Route path="/fullstack" element={<FullStack />} />
        <Route path="/datascience" element={<DataScience />} />
        <Route path="/cybersecurity" element={<CyberSecurity />} />
        <Route path="/carrier" element={<Carrier />} />
      </Routes>
    </>
  );
}

export default Home;
