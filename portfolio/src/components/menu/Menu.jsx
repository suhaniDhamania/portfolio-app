import React from "react";
import profilepic from "../../assets/Snapchat-815549135.jpg";
import { FcHome, FcAbout, FcBiotech, FcReading } from "react-icons/fc";
import { AiFillProject } from "react-icons/ai";
import { FcBusinessContact } from "react-icons/fc";
import { Link } from "react-scroll";



import "./Menu.css";
const Menu = ({ isToggled }) => {
  return (
    <>
      {!isToggled ? (
        <>
        
          <div className="navbar-profile-pic">
            <img src={profilepic} alt="profile-pic" />
          </div>
      
          <div data-aos="fade-right">
          <div className="nav-items">
            <div className="nav-item icons">
              <div className="nav-link">
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <span>
                    <FcHome />
                  </span>
                  <span> Home</span>
                </Link>
              </div>
            </div>
            <div className="nav-item icons ">
              <div className="nav-link">
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <span>
                    <FcAbout />
                  </span>
                  <span>About</span>
                </Link>
              </div>
            </div>
            <div className="nav-item icons ">
              <div className="nav-link">
                <Link
                  to="education"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <span>
                    <FcReading />
                  </span>
                  <span>Education</span>
                </Link>
              </div>
            </div>
            <div className="nav-item icons ">
              <div className="nav-link">
                <Link
                  to="techstack"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <span>
                    <FcBiotech />
                  </span>
                  <span> Tech-stack</span>
                </Link>
              </div>
            </div>

            <div className="nav-item icons ">
              <div className="nav-link">
                <Link
                  to="project"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <span>
                    <AiFillProject />
                  </span>
                  <span>Projects</span>
                </Link>
              </div>
            </div>

            <div className="nav-item icons">
              <div className="nav-link">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
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
        </>
      ) : (
        <>
          {" "}
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcHome />
                </Link>
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcAbout />
                </Link>
              </div>
            </div>

            <div className="nav-item">
              <div className="nav-link">
                <Link
                  to="education"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcReading />
                </Link>
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <Link
                  to="techstack"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcBiotech />
                </Link>
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <Link
                  to="project"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <AiFillProject />
                </Link>
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcBusinessContact />
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Menu;
