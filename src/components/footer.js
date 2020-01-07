import React from "react"
import logo from "../images/logos.png"
import icons from "../constants/SocialLinks"
import styles from "../sass/footer.module.scss"
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.logos}>
          <div className={styles.footerEducation}>
            <img src={logo} alt="Adam Kif logo" className={styles.logo}></img>
            <h1>Education</h1>
          </div>
          <div className={styles.icons}>
            {icons.map(item => {
              return (
                <a
                  key={item.id}
                  href={item.url}
                  className={styles.icon}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.image}
                </a>
              )
            })}
          </div>
        </div>
        <div className={styles.info}>
          © {new Date().getFullYear()} Adam Kif. All rights Reserved. Built with
          <a
            href="https://www.gatsbyjs.org/"
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Gatsby
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
