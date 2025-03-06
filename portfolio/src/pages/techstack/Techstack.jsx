import React from "react";
import "./Tachstack.css";
import { TechstackList } from "../../utils/Techstacklist";

const Techstack = () => {
  return (
    <div id="techstack">
      <div className="techstack">
        <h1 className="col-12  text-center tech">Technologies Stack</h1>
        <p className="col-12 mb-1 mt-3 text-center tech-stack">
          👉 including programming languages, frameworks, database, front-end
          and back-end tools, and APIs.
        </p>
       
        <div className="skills ">
          {TechstackList.map((tech) => (
            <div key={tech._id} className="row">
              <div className="card ">
                <div className="card-body  ">
                  <h5 className="card-title  ">
                    <tech.icon/>
                  </h5>
                  <p className="card-text">{tech.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      
      </div>
    </div>
  );
};

export default Techstack;
