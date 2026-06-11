import styles from "./Layout.module.css"
import { Outlet } from "react-router"


export default function Layout() {
  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.title}>Quiz Time</h1>
      <div className={styles.bodyContainer}>
        <Outlet />
      </div>
    </div>
  )
}