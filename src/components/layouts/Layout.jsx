import styles from "./Layout.module.css"
import { Outlet } from "react-router"


export default function Layout() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Quiz Time</h1>
      <Outlet />
    </div>
  )
}