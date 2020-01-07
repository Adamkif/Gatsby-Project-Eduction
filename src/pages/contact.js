import React from "react"
import { Link } from "gatsby"
import img from "../images/logos.png"
import styles from "../sass/navbar.module.scss"
import Footer from "../components/footer"
import "../sass/contact.scss"
import { FaEnvelope, FaPhone, FaAddressCard } from "react-icons/fa"
const Contact = () => {
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
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact/" className={styles.current}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <section id="contact-a" className="text-center py-3">
        <div className="container">
          {/* <div className="centeritem"> */}
          <h2 className="section-title">Contact Us</h2>
          {/* <div className="bottom-line"></div> */}
          <p className="lead">Here is how you can reach Us</p>
          <form>
            <div className="text-fields">
              <input
                type="text"
                className="text-input name-input"
                placeholder="Name"
              />
              <input
                type="text"
                className="text-input subject-input"
                placeholder="Subject"
              />
              <input
                type="text"
                className="text-input email-input"
                placeholder="Email Address"
              />
              <input
                type="text"
                className="text-input phone-input"
                placeholder="Phone Number"
              />
              <textarea
                className="text-input message-input"
                placeholder="Enter Message"
              ></textarea>
            </div>
            <button type="submit" className="btn-large">
              Submit
            </button>
          </form>
          {/* </div> */}
        </div>
      </section>
      {/* Section Info */}
      <section id="contact-b" className="bg-dark py-2">
        <div className="container">
          <div className="contact-info">
            <div>
              <FaEnvelope className="faiconContact" />
              <h3>Email</h3>
              <p>adamkif@gmail.com</p>
            </div>
            <div>
              <FaPhone className="faiconContact" />
              <h3>Phone</h3>
              <p>(555) 555-5555</p>
            </div>
            <div>
              <FaAddressCard className="faiconContact" />
              <h3>Address</h3>
              <p>50 Main st, Boston MA</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact-c" className="bg-green py-4">
        <div className="container">
          <h1>Let's Start Your Next Course</h1>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Contact
