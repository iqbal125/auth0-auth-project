import React from "react"
import "./styles/global.css"
import { navigate } from "gatsby"
import styles from "./styles/home.module.css"
import image1 from "../../static/auth0-icon.svg"
import Footer from "../components/Footer"

const Index = () => {
  return (
    <>
      <div className={styles.home_wrapper}>
        <h1>
          This is a Sample App that demonstrates an Authentication Project
        </h1>
        <h2>Click Login to Get Started</h2>
        <button
          className={styles.submit_button}
          onClick={() => navigate("/account")}
        >
          Click Here to Login
        </button>
        <img className={styles.home_image} src={image1} alt="" />
      </div>
      <Footer />
    </>
  )
}

export default Index
