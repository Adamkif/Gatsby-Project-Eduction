import React from "react"
import { Link } from "gatsby"
import img from "../images/logos.png"
import styles from "../sass/navbar.module.scss"
import SectionEducation from "../home/Section_Education"
import Footer from "../components/footer"
import SectionFeatures from "../home/Section_Features"
import { useStaticQuery, graphql } from "gatsby"
// import img1 from "../images/background.png"
import BackgroundImage from "gatsby-background-image"
const getData = graphql`
  {
    image1: file(relativePath: { eq: "background.png" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1280) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
const Home = () => {
  const data = useStaticQuery(getData)
  const Image1 = data.image1.childImageSharp.fluid
  return (
    <>
      <BackgroundImage className="bg-gatsby" fluid={Image1}>
        <header className={styles.headerHome}>
          <div className="container">
            <nav className={styles.mainNav}>
              <div className={styles.education}>
                <img src={img} alt="MyLogo" className={styles.logo} />
                <h1>EDUCATION</h1>
              </div>
              <ul>
                <li>
                  <Link to="/" className={styles.current}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/courses">Courses</Link>
                </li>
                <li>
                  <Link to="/programs">Programs</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/contact/">Contact</Link>
                </li>
              </ul>
            </nav>

            <div className={styles.headerContent}>
              <h1>Knowledge is power</h1>
              <p>Any succesfull career starts with good education</p>
              <Link to="/about" className="btn-main">
                Learn more
              </Link>
            </div>
          </div>
        </header>
      </BackgroundImage>
      <SectionEducation />
      <SectionFeatures />
      <Footer />
    </>
  )
}

export default Home
