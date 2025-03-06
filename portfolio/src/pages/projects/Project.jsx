import React, { useState } from "react";
import "./Project.css";
import { projects } from "../../utils/projectlist";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Project = () => {
  let [currentIndex, setCurrindex] = useState(0);

  function increaseIndex() {
    setCurrindex((prevIndex) => (prevIndex + 1) % projects.length);
  }

  function decreaseIndex() {
    setCurrindex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  }

  return (
    <>
      <div className="project" id="project">
        <div className="text  mt-5">
          <h1 className="col-12 text-center text-uppercase top">
            Top Recent Projects
          </h1>
          <p className="col-12 mb-1 mt-3 text-white">
            👉 Here are my top 3 recent projects with live links and source
            code.
          </p>
        </div>
        
          {projects.length > 0 && (
            <div className="card-container">
              <div className="back-btn">
                <button className="btn btn-backword " onClick={decreaseIndex}>
                  <IoIosArrowBack />
                </button>
              </div>
              <div className="card-body">
                <img
                  className="project-image"
                  src={projects[currentIndex].image}
                  alt="..."
                />
              </div>

              <div className="project-info">
                <div className="project-des ">
                  <h5 className="card-title mt-4 fs-1 fw-bold">
                    {projects[currentIndex].name}
                  </h5>
                  <p className="card-text mt-2 ">
                    {projects[currentIndex].description}
                  </p>
                  <a
                    href={projects[currentIndex].link}
                    target="_blank"
                    className="btn btn-primary see-btn"
                  >
                    See project
                  </a>
                </div>
              </div>

              <div className="project-btn ">
                <button className="btn btn-forward " onClick={increaseIndex}>
                  <IoIosArrowForward />
                </button>
              </div>
            </div>
          )}
        
      </div>
    </>
  );
};

export default Project;
