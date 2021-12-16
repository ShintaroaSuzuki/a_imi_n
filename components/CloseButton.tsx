import styles from '../styles/components/CloseButton.module.scss'

const CloseButton = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["bar"]}/>
      <div className={styles["bar"]}/>
    </div>
  )
} 

export default CloseButton;
