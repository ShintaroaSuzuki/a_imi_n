import MenuButton from './MenuButton'
import styles from '../styles/components/Header.module.scss'

const Header = () => {
  return (
    <div className={styles["header"]}>
      <span className={styles["header-logo"]}>永眠</span>
      <MenuButton />
    </div>
  )
}

export default Header;
