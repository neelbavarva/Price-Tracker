import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar navbar-b navbar-trans navbar-expand-md fixed-top">
      <div className="container">
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-toggle="collapse"
          data-target="#navbarDefault"
          aria-controls="navbarDefault"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <div className="navbar-brand js-scroll">
            kkkk
          </div>
        </button>
        <div
          className="navbar-collapse collapse justify-content-end"
          id="navbarDefault"
        >
          <ul className="navbar-nav">
            <a className="nav-link js-scroll" href="/about">
              yo
            </a>

            <a className="nav-link js-scroll" href="#work">
              dds
            </a>

            <a className="nav-link js-scroll" href="#contact">
              ads
            </a>
            <a className="nav-link js-scroll" href="#contact">
              gd
            </a>
          </ul>
        </div>
      </div>
    </nav>
  );
}