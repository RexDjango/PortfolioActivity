import React from "react";

function NavbarComp() {
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" href="/index">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/faqs">
                FAQS
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavbarComp;
