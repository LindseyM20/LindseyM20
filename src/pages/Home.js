import React from "react";
import Image from "../images/headshot.jpg"
import "../App.css"

const bio1 = "Full-Stack Web Developer Lindsey Bordner received her introduction to coding through the University of Minnesota Coding Bootcamp. Having had a fruitful career performing and teaching the violin, Lindsey brings to the table invaluable experience of business ownership, contractor management, customer service, communication, artistic expression, and team work. Integral to both professions is a lifelong commitment to learning and honing one's skill. Lindsey's analytical nature, attention to detail, and enjoyment of solving puzzles lend well to her web development success."
const bio2 = "Lindsey holds degrees from the University of Minnesota and the University of Michigan. She lives in St. Paul, MN and in her free time enjoys going on walks with her husband and two dogs, playing video games, gardening, and playing music with friends."

function Home() {
  return (
    <div className="about">
      <h1>Meet Lindsey</h1>
      <img
        className="headshot img-fluid float-left"
        src={Image}
        alt="Lindsey's headshot"
      />
      <div className="bio">
        <p>{bio1}</p>
        <p>{bio2}</p>
      </div>
    </div>
  );
}

export default Home;
