import React from 'react';
import './about_hero.css'; 

import bigStar from '../../assets/Star 9.png';
import smallStar from '../../assets/Star 10.png';

function AboutHeroSection({heading, info}) {
  return (
    <div className="about-hero">
      <div className="star-div">
        <div className="about-hero-text">

          {/* Top row: Big stars and core text */}
          <div className="VeilDigits-lets-you">

            <div className="stars">
              <img className="big-star" src={bigStar} alt="Decorative big star" />
            </div>

            <div className="with-anonymous-calling">
              <p className="center-text">{heading}
              </p>
            </div>

            <div className="stars">
              <img className="big-star" src={bigStar} alt="Decorative big star" />
            </div>

          </div>

          {/* Bottom row: Small stars and closing text */}
          <div className="star-text">
            <img className="small-star" src={smallStar} alt="Small decorative star" />
            <p className="center-text">{info}</p>
            <img className="small-star" src={smallStar} alt="Small decorative star" />
          </div>

        </div>
      </div>
    </div>
  );
}

export default AboutHeroSection;
