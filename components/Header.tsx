import MenuButton from './MenuButton'
import styles from '../styles/components/Header.module.scss'

const Header = () => {
  return (
    <div className={styles["header"]}>
      <text>永眠</text>
      <MenuButton />
    </div>
  )
}

export default Header;
