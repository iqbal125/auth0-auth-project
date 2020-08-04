import React from "react"
import { handleAuthentication } from "../utils/auth"
import Spinner from "../components/Spinner"

const Callback = () => {
  handleAuthentication()

  return <Spinner />
}

export default Callback
