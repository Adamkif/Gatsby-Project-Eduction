import React from "react"
import Image from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import icon1 from "../images/icon1.png"
import icon2 from "../images/icon2.png"
import icon3 from "../images/icon3.png"
import "./Section_Education.scss"
const getData = graphql`
  {
    file(relativePath: { eq: "education.png" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
const SectionEducation = () => {
  const data = useStaticQuery(getData)
  const imageEducation = data.file.childImageSharp.fluid
  return (
    <section>
      <div className="container">
        <div className="education">
          <div className="images">
            <Image fluid={imageEducation} alt="education" className="imgeG" />
          </div>
          <div className="learn">
            <div className="educ">
              <h1>Education</h1>

              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus aliquid esse nostrum aut? Magnam iure excepturi
                minima facere distinctio, fuga quis.
              </p>
            </div>
            <div className="icon-learn">
              <img src={icon1} alt="icon1" className="icon" />
              <h1>Learn Anything</h1>
            </div>
            <div className="icon-learn">
              <img src={icon2} alt="icon1" className="icon" />

              <h1>Talk To Our Instructors</h1>
            </div>
            <div className="icon-learn">
              <img src={icon3} alt="icon1" className="icon" />
              <h1>Speak With Others</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionEducation
