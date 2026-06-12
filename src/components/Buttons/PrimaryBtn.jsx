import styles from "./PrimaryBtn.module.css"

export default function PrimaryBtn({children, ...restProps}) {
  return (
    <button className={styles.btn} {...restProps}>{children}</button>
  )
}