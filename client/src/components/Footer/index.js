import React from "react"
import styles from "./footer.module.css"

const Footer = () => {
  return (
    <footer>
      <div className={styles.footer_wrapper}>
        <div className={styles.footer_main}>
          <div className={styles.left_footer}>
            <a
              href="https://github.com/iqbal125"
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className={styles.footer_link}>Created by @iqbal125</div>
            </a>
            <a
              href="https://github.com/iqbal125/gatsby-advanced-authentication"
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className={styles.footer_link}>Project Code </div>
            </a>
          </div>
          <div className={styles.right_footer} />
        </div>
        <div className={styles.footer_bottom} />
      </div>
    </footer>
  )
}

export default Footer
