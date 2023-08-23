import React from "react";
import "./header.css";

function Header() {
  //   console.log("logo", logo);
  return (
    <div className="container">
      <div className="nav">
        <div className="logo">
          <img src="/Assets/guvi.png" alt="logo"></img>
          <a href="www.google.com">Blogs</a>
        </div>
        <div className="navlist">
          <ul>
            <li>Courses</li>
            <li>Live Classes</li>
            <li>Practice</li>
            <li>Resources</li>
            <li>Our Practice</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
