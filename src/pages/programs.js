import React from "react"
import { Link } from "gatsby"
import img from "../images/logos.png"
import styles from "../sass/navbar.module.scss"
import Footer from "../components/footer"
import "../sass/programs.scss"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
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

const Program = () => {
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
                <Link to="/courses">Courses</Link>
              </li>
              <li>
                <Link to="/programs" className={styles.current}>
                  Programs
                </Link>
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
      <section className="program">
        <div className="container">
          <div className="text-center">
            <h1>Programs</h1>
          </div>
          <div className="grid1">
            <div className="images">
              <Image fluid={Image1} alt="education" className="img" />
              <div className="colors"></div>
              <div className="text-over">
                <h2>Pre-college education</h2>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            </div>
            <div className="images">
              <Image fluid={Image2} alt="education" className="img" />
              <div className="colors"></div>

              <div className="text-over">
                <h2>Middle school</h2>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            </div>
            <div className="images">
              <Image fluid={Image3} alt="education" className="img" />
              <div className="colors"></div>
              <div className="text-over">
                <h2>Hight school</h2>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            </div>
            <div className="images">
              <Image fluid={Image1} alt="education" className="img" />
              <div className="colors"></div>
              <div className="text-over">
                <h2>International exchange</h2>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            </div>
            <div className="images">
              <Image fluid={Image2} alt="education" className="img" />
              <div className="colors"></div>

              <div className="text-over">
                <h2>Graduate programs</h2>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            </div>
            <div className="images">
              <Image fluid={Image3} alt="education" className="img" />
              <div className="colors"></div>
              <div className="text-over">
                <h2>Home education</h2>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Program
