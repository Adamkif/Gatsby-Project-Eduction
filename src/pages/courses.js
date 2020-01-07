import React from "react"
import { Link } from "gatsby"
import img from "../images/logos.png"
import styles from "../sass/navbar.module.scss"
import Footer from "../components/footer"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import "../sass/courses.scss"
const getData = graphql`
  {
    image1: file(relativePath: { eq: "1.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    image2: file(relativePath: { eq: "2.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    image3: file(relativePath: { eq: "3.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
const Courses = () => {
  const data = useStaticQuery(getData)
  const Image1 = data.image1.childImageSharp.fluid
  const Image2 = data.image2.childImageSharp.fluid
  const Image3 = data.image3.childImageSharp.fluid
  return (
    <>
      <header className={styles.headerOthers}>
        <div className="container">
          <nav className={styles.mainNav}>
            <div className={styles.education}>
              <img src={img} alt="MyLogo" className={styles.logo} />
              <h1>EDUCATION</h1>
            </div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/courses" className={styles.current}>
                  Courses
                </Link>
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
        </div>
      </header>
      <section className="course">
        <div className="container">
          <div className="text-center">
            <h1>Courses</h1>
          </div>
          <div className="grid">
            <div className="web-course">
              <Image fluid={Image1} alt="education" className="img" />
              <div className="text">
                <h1>Web Design</h1>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Atque, quisquam!
                </p>
              </div>
              <div className="bottom-line-w360"></div>

              <div className="h2center">
                <h2>Time : 3 pm</h2>
              </div>
              <div className="bottom-line-w245"></div>
              <div className="h2center">
                <h2>Teacher: Ressie Rottman</h2>
              </div>
              <div className="bottom-line-w245 mb"></div>
              <button className="btn-large">
                <a
                  href="http://www.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Join Now
                </a>
              </button>
            </div>
            <div className="web-course">
              <Image fluid={Image2} alt="education" className="img" />
              <div className="text">
                <h1>Photography</h1>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Atque, quisquam!
                </p>
              </div>
              <div className="bottom-line-w360"></div>

              <div className="h2center">
                <h2>Time : 6 pm</h2>
              </div>
              <div className="bottom-line-w245"></div>
              <div className="h2center">
                <h2>Teacher: Floyd Fukuda</h2>
              </div>
              <div className="bottom-line-w245 mb"></div>
              <button className="btn-large">
                <a
                  href="http://www.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Join Now
                </a>
              </button>
            </div>
            <div className="web-course">
              <Image fluid={Image3} alt="education" className="img" />
              <div className="text">
                <h1>Digital Marketing</h1>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Atque, quisquam!
                </p>
              </div>
              <div className="bottom-line-w360"></div>

              <div className="h2center">
                <h2>Time : 10 am</h2>
              </div>
              <div className="bottom-line-w245"></div>
              <div className="h2center">
                <h2>Teacher: Elena Cully</h2>
              </div>
              <div className="bottom-line-w245 mb"></div>
              <button className="btn-large">
                <a
                  href="http://www.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Join Now
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Courses
