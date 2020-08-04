import React from "react"
import Spinner from "../components/Spinner"
import styles from "./styles/home.module.css"
import { navigate } from "gatsby"
import { login, logout, isAuthenticated, getProfile } from "../utils/auth"
import image1 from "../../static/auth0-icon.svg"

const Account = () => {
  if (!isAuthenticated()) {
    login()
    return <Spinner />
  }

  const user = getProfile()

  return (
    <div className={styles.container_account}>
      <h3>Hi, {user ? user.name : "friend"}</h3>
      <a
        href="#logout"
        onClick={e => {
          logout()
        }}
      >
        <button>Logout</button>
      </a>
      <img className={styles.home_image} src={image1} alt="" />
    </div>
  )
}

export default Account
