import React from "react"
import styles from "./main.module.scss"

const Main = ({ children }) => {
  return <div className={styles["main"]}>{children}</div>
}

export default Main
