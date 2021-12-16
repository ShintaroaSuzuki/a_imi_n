import styles from '../styles/components/MenuModal.module.scss'
import Header from './Header'
import CloseButton from './CloseButton'

const MenuModal = () => {
  return (
    <div className={styles["container"]}>
      <Header>
        <CloseButton />
      </Header>
      <text>ギャラリー</text>
    </div>
  )
}

export default MenuModal;
