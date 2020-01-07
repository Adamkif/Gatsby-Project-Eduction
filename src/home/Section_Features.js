import React from "react"
import "./Section_Features.scss"

import icon1 from "../images/feature1t.png"
import icon2 from "../images/feature2.png"
import icon3 from "../images/feature3.png"
import icon4 from "../images/feature4.png"
import icon5 from "../images/feature5.png"
import icon6 from "../images/feature6.png"
import "./Section_Education.scss"

const SectionFeatures = () => {
  return (
    <section>
      <div className="container">
        <div className="features">
          <div className="feature">
            <h1>Features</h1>
          </div>
          <div className="iconsFeatures">
            <div>
              <img src={icon1} alt="icon1" className="icon" />
              <h2>Online Testing</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
                nisi.
              </p>
            </div>
            <div>
              <img src={icon2} alt="icon1" className="icon" />
              <h2>Expert Professors</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
                nisi.
              </p>
            </div>
            <div>
              <img src={icon3} alt="icon1" className="icon" />
              <h2>Trusted Certifications</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
                nisi.
              </p>
            </div>
            <div>
              <img src={icon4} alt="icon1" className="icon" />
              <h2>Scientific Research</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
                nisi.
              </p>
            </div>
            <div>
              <img src={icon5} alt="icon1" className="icon" />
              <h2>Audio Video Course</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
                nisi.
              </p>
            </div>
            <div>
              <img src={icon6} alt="icon1" className="icon" />
              <h2>Professional Courses</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
                nisi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionFeatures
