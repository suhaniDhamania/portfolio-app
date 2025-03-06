import "./Home.css";
import TypeWritter from "typewriter-effect";
import icon from "../../assets/Budget Planning (1).png"
import React from "react";
import { Link } from "react-scroll";
import resume from "../../assets/frontend resume(suhani Dhamania).pdf";

const Home = () => {
  return (
    <div className="container-fluid home-container " id="home">
      <div className="container home-content">
      
          <h1 className="hello">Hello,</h1>
          <h3>Suhani Dhamania</h3>
          <h2>
            {" "}
            <TypeWritter
              options={{
                strings: [
                  "Mern-stack Developer",
                  "Backend Developer💻",
                  "Frontend-Developer💻",
                  
                ],
                autoStart: true,
                loop: true,
                delay: 75,
              }}
            />
          </h2>
          <p className="col-12 ">
            Welcome to my Portfolio.Exited to share my Creative Journey with
            you. let's Dive into some awesome projects together!
          </p>
          
       
          <div className="home-btns">
            <Link  to="contact"
                    spy={true}
                    smooth={true}
                    offset={100}
                    duration={100}>
            <a target="_blank" href="#"className="btn link-btn">
              Contact us
            </a>
            </Link>
            <a href={resume} target="_blank" className="btn  btn-resume link-btn">
              My Resume
            </a>
          </div> 
         

          <div className="social-media-icon">
            <a href="https://wa.me/918851648618" target="_blank" alt="whatsapp">
              <i className="fa-brands fa-whatsapp "></i>
            </a>

            <a
              href=" https://www.instagram.com/coding_journey26/"
              target="_blank"
              alt="instagram"
            >
              <i className="fa-brands fa-instagram "></i>
            </a>

            <a
              href="https://www.linkedin.com/in/suhani-dhamania-9519b82b1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              alt="linkdin"
            >
              <i className="fa-brands fa-linkedin-in "></i>
            </a>
            <a
              href="https://github.com/suhaniDhamania"
              target="_blank"
              alt="github"
            >
              <i className="fa-brands fa-github "></i>
            </a>
          </div>
      
     
      </div>
     
        <div className="home-3d-icon">
          <img src={icon} alt="3dicon" />
       
     </div>
    </div>
  );
};

export default Home;
