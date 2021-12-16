import styles from '../styles/components/MenuModal.module.scss'
import CloseButton from './CloseButton'

const MenuModal = () => {
  return (
    <div className={styles["container"]}>
      <CloseButton />
      <text>ギャラリー</text>
    </div>
  )
}

export default MenuModal;
