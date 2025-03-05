import React from "react";
import "./Education.css";
import { IoIosSchool } from "react-icons/io";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
const Education = () => {
  return (
    <>
      <div className="education text-center  " id="education">
        <h1 className="col-12 text-center text-uppercase educ">
          Education Details
        </h1>
        <div className="education-line">
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#f6093c", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid #f6093c"}}
            date="2023"
            iconStyle={{ background: "#f6093c", color: "#fff" }}
            icon={<IoIosSchool />}
          > 
            <h3 className="vertical-timeline-element-title">High-School</h3>
            <h4 className="vertical-timeline-element-subtitle">Noida,barola</h4>
            
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#f6093c", color: "#fff"  }}
            contentArrowStyle={{ borderRight: "7px solid  #f6093c" }}
            date="2023 - present"
            iconStyle={{ background: "#f6093c", color: "#fff" }}
            icon={<IoIosSchool />}
          >
            <h3 className="vertical-timeline-element-title">BCA</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Greater Noida,knowledge park-III
            </h4>
            
          </VerticalTimelineElement>
        </VerticalTimeline>
        </div>
      </div>
    </>
  );
}; 

export default Education;
