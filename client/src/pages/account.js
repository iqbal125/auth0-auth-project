import React from "react"
import Spinner from "../components/Spinner"
import styles from "./styles/home.module.css"
import { login, logout, isAuthenticated, getProfile } from "../utils/auth"

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
          e.preventDefault()
        }}
      >
        <button>Logout</button>
      </a>
    </div>
  )
}

export default Account
