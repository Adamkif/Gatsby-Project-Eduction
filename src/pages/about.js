import React from "react"
import { Link } from "gatsby"
import img from "../images/logos.png"
import styles from "../sass/navbar.module.scss"
import Footer from "../components/footer"
import "../sass/about.scss"
import img4 from "../images/4.png"
import img5 from "../images/5.png"
import img6 from "../images/6.png"
const About = () => {
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
                <Link to="/programs">Programs</Link>
              </li>
              <li>
                <Link to="/about" className={styles.current}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact/">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <section>
        <div className="container">
          <div className="flexitem">
            <div className="teacher">
              <h1>Our Teachers</h1>
            </div>
            <div className="grid">
              <div className="flex">
                <img src={img4} alt="img6" className="imgContact" />
                <div className="text">
                  <h2>Nancee Bluford</h2>
                  <h3>Design Head</h3>
                </div>
              </div>
              <div className="flex">
                <img src={img5} alt="img6" className="imgContact" />
                <div className="text">
                  <h2>Russie Rottman</h2>
                  <h3>UI/UX Designer</h3>
                </div>
              </div>
              <div className="flex">
                <img src={img6} alt="img6" className="imgContact" />
                <div className="text">
                  <h2>Arelene</h2>
                  <h3>Seo Head</h3>
                </div>
              </div>
              <div className="flex">
                <img src={img5} alt="img6" className="imgContact" />
                <div className="text">
                  <h2>Nancee Bluford</h2>
                  <h3>Design Head</h3>
                </div>
              </div>
              <div className="flex">
                <img src={img6} alt="img6" className="imgContact" />
                <div className="text">
                  <h2>Russie Rottman</h2>
                  <h3>UI/UX Designer</h3>
                </div>
              </div>
              <div className="flex">
                <img src={img4} alt="img6" className="imgContact" />
                <div className="text">
                  <h2>Sam Recio</h2>
                  <h3>Photograper</h3>
                </div>
              </div>
              <div className="flex">
                <img src={img6} alt="img6" className="imgContact" />
                <div className="text">
                  <h2>Katrine Recio</h2>
                  <h3>Marketing HDD</h3>
                </div>
              </div>
              <div className="flex">
                <img src={img4} alt="img6" className="imgContact" />
                <div className="text">
                  <h2>Ellen Cully</h2>
                  <h3>Design Head</h3>
                </div>
              </div>
              <div className="flex">
                <img src={img5} alt="img6" className="imgContact" />
                <div className="text">
                  <h2>Burton Broke</h2>
                  <h3>Web Technologist</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Clients */}
      <section>
        <div className="container">
          <div className="flexclient">
            <div className="teacher">
              <h1>What Our Clients Say</h1>
            </div>
            <div className="fleximage">
              <img src={img4} alt="img6" className="imgContact1" />
              <img src={img6} alt="img6" className="imgContact1" />
              <img src={img5} alt="img6" className="imgContact1" />
              <img src={img4} alt="img6" className="imgContact1" />
              <img src={img6} alt="img6" className="imgContact1" />
              <img src={img5} alt="img6" className="imgContact1" />
            </div>
            <div className="grid-para">
              <div className="para">
                <h3>Adam Kif</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati ipsum doloribus esse velit nesciunt minima, dolore
                  cumque reprehenderit?
                </p>
              </div>
              <div className="para">
                <h3>Katrine Kif</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati ipsum doloribus esse velit perferendis nulla
                </p>
              </div>
              <div className="para">
                <h3>John Kif</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati ipsum doloribus esse velit perferendis nulla
                  nesciunt minima, dolore cumque
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default About
