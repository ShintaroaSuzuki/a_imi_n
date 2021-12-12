import MenuButton from './MenuButton'
import styles from '../styles/components/Header.module.scss'

const Header = ({loading}: { loading: Boolean }) => {
  return (
    <div className={loading ? styles["header-loaded"] : styles["header"]}>
      <span className={loading ? styles["header-logo-loaded"] : styles["header-logo"]}>永眠</span>
      <MenuButton loading={loading} />
    </div>
  )
}

export default Header;
