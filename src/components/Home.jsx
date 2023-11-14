import React from "react";
import vg from "../assests/4.png"
import {AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>TechStar</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            We are your one and only solution to tech problems you face every
            day. We are leading tech company whose aim is to increase the
            problem solving ability in children.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut numquam adipisci eius nam voluptatibus. Vel magni dolorum assumenda officiis dolore ducimus optio veritatis repellendus nemo quia dolores qui, quod facilis quo inventore. Quasi, quo explicabo dolores hic fugit, modi vitae, magni id labore nobis quibusdam!
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            
            <div style={{animationDelay:"0.3s"}}>
              <AiFillGoogleCircle/>
              <p>Google</p>
            </div>
            <div style={{animationDelay:"0.5s"}}>
              <AiFillAmazonCircle/>
              <p>Amazon</p>
            </div>
            <div style={{animationDelay: "0.7s"}}>
              <AiFillInstagram/>
              <p>Instagram</p>
            </div>
            <div style={{animationDelay: "0.9s"}}>
              <AiFillYoutube/>
              <p>Youtube</p>
            </div>
          </article>
          
          </div>
      </div>
    </>
  );
};

export default Home;
