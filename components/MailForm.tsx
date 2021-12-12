import styles from '../styles/components/MailForm.module.scss'

const MailForm = ({ loading }: { loading: Boolean }) => {
  return (
    <div className={loading ? styles["mailform-container-loaded"] : styles["mailform-container"]}>
      <p className={styles["text"]}>Gorilla</p>
      <p className={styles["text"]}>ご連絡は下記のフォームからお願いします</p>
    </div>
  )
}

export default MailForm
