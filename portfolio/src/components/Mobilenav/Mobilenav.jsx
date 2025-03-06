import React, { useState } from "react";
import "./Mobilenav.css";
import { FiMenu } from "react-icons/fi";
import { FcHome, FcAbout, FcBiotech, FcReading } from "react-icons/fc";
import { AiFillProject, AiOutlineMenuUnfold } from "react-icons/ai";
import { FcBusinessContact } from "react-icons/fc";
import { Link } from "react-scroll";


const Mobilenav = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleMenuClick = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="mobile-nav">
        <div className="mobile-nav-header">
          {open ? (
            <AiOutlineMenuUnfold onClick={handleOpen} />
          ) : (
            <FiMenu
              size={40}
              className="mobile-nav-icon"
              onClick={handleOpen}
            />
          )}

          <span className="mobile-nav-title">My Portfolio App</span>
         
        </div>
        {open && (
          <div className="mobile-nav-menu">
           <div data-aos="fade-right">
            <div className="nav-items">
              <div className="nav-item ">
                <div className="nav-link">
                  <Link
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                    onClick={handleMenuClick}
                  >
                    <span>
                      <FcHome />
                    </span>
                    <span> Home</span>
                  </Link>
                </div>
              </div>
              <div className="nav-item  ">
                <div className="nav-link">
                  <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                    onClick={handleMenuClick}
                  >
                    <span>
                      <FcAbout />
                    </span>
                    <span>About</span>
                  </Link>
                </div>
              </div>
              <div className="nav-item  ">
                <div className="nav-link">
                  <Link
                    to="education"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                    onClick={handleMenuClick}
                  >
                    <span>
                      <FcReading />
                    </span>
                    <span>Education</span>
                  </Link>
                </div>
              </div>
              <div className="nav-item  ">
                <div className="nav-link">
                  <Link
                    to="techstack"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                    onClick={handleMenuClick}
                  >
                    <span>
                      <FcBiotech />
                    </span>
                    <span> Tech-stack</span>
                  </Link>
                </div>
              </div>

              <div className="nav-item  ">
                <div className="nav-link">
                  <Link
                    to="project"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                    onClick={handleMenuClick}
                  >
                    <span>
                      <AiFillProject />
                    </span>
                    <span>Projects</span>
                  </Link>
                </div>
              </div>

              <div className="nav-item ">
                <div className="nav-link">
                  <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                    onClick={handleMenuClick}
                  >
                    <span>
                      <FcBusinessContact />
                    </span>
                    <span>Contact Us</span>
                  </Link>
                </div>
              </div>
            </div>
           </div>
          </div>
        )}
        
      </div>
    </>
  );
};

export default Mobilenav;
