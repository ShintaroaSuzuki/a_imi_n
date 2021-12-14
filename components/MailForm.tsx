import styles from '../styles/components/MailForm.module.scss'
import { UilTwitter, UilInstagram, UilEnvelope } from '@iconscout/react-unicons'

const MailForm = ({ loading }: { loading: Boolean }) => {
  return (
    <div className={loading ? styles["mailform-container-loaded"] : styles["mailform-container"]}>
      <div className={styles["text-box"]}>
        <text className={styles["text"]}>永海</text>
      </div>
      <div className={styles["text-box"]}>
        <UilTwitter size="20" color="gray"/>
        <text className={styles["text"]}>Twitter: @a_imi_n</text>
      </div>
      <div className={styles["text-box"]}>
        <UilInstagram size="20" color="gray"/>
        <text className={styles["text"]}>Instagram: @a_imi_n</text>
      </div>
      <div className={styles["text-box"]}>
        <UilEnvelope size="20" color="gray"/>
        <text className={styles["text"]}>Mail: a.imi.n.t.0508@gmail.com</text>
      </div>
    </div>
  )
}

export default MailForm
