import React from "react";
import Image from "next/image";
import profilePic from "/public/Profile.jpg";
interface AboutProps {
  about: string;
  aboutHobbies: string;
}

const About = ({ about, aboutHobbies }: AboutProps) => {
  return (
    <div className="about-section">
      <div className="about-content">
        <div className="about-text">
          <h2>About Me</h2>
          <p>{about}</p>
        </div>
        <div className="about-image">
          <Image
            src={profilePic}
            alt="Profile"
            width={200}
            height={200}
            className="profile-image"
          />
        </div>
        <div className="about-hobbies">
          <p>{aboutHobbies}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
