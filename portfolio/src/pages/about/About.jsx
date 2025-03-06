import React from "react";
import "./About.css";
import myImage from "../../assets/Snapchat-815549135.jpg";


const About = () => {
  return (
    <>
      <div className=" about" id="about">

        <div className="row col-12  ">
        
            <div className="col-md-6 About-image">
          
              <img className="a-image" src={myImage} alt="Image" />
              </div>
           
            
            <div className="col-md-6 content">
              <h1 className="head ">About me👧</h1>
             
              <p className="about-text">
                Hello! My name is Suhani Dhamania, and I am passionate about
                building innovative and impactful solutions that live on the
                internet. My journey into MERN-stack development began in 2024
                when I took my first steps toward creating engaging and
                functional websites. It was then that I discovered my love for
                merging logical problem-solving with creative design to develop
                user-friendly and visually appealing websites and applications.
                For me, technology is not just about coding—it's about enabling
                connections, fostering inclusivity, and making lives easier. I
                believe that the digital world offers endless opportunities to
                create accessible and equitable platforms, and I am deeply
                committed to ensuring that my work reflects these values. From
                designing intuitive user interfaces to developing robust
                back-end solutions, I enjoy the challenge of bringing ideas to
                life in a way that is both effective and innovative. The rapid
                pace of technological advancements inspires me, and I see each
                project as a chance to learn and grow. As a strong advocate for
                diversity and representation in tech, I aspire to contribute to
                a more inclusive industry where everyone feels empowered to
                participate and thrive. I am eager to take on new challenges and
                collaborate with like-minded professionals who share my
                enthusiasm for impactful technology. With a focus on
                continuously refining my skills and exploring cutting-edge
                tools, I aim to stay at the forefront of the field and deliver
                solutions that make a difference. Thank you for taking the time
                to learn about me and my passion for web development. I look
                forward to connecting, sharing ideas, and contributing to
                innovative projects that have a meaningful impact on society.
                Together, let's build a brighter and more inclusive future!
              </p>
           
            </div>
        </div>
      </div>
    </>
  );
};
export default About;
