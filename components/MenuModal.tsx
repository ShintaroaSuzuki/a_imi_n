import styles from '../styles/components/MenuModal.module.scss'
import Header from './Header'
import CloseButton from './CloseButton'

const MenuModal = () => {
  return (
    <div className={styles["container"]}>
      <Header backgroundColor="none">
        <CloseButton/>
      </Header>
    </div>
  )
}

export default MenuModal;
