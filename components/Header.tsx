import styles from '../styles/components/Header.module.scss'
import { ReactElement } from 'react'

type Props = {
  loading?: Boolean;
  headerTitle?: string;
  children: ReactElement;
  backgroundColor: string;
}

const Header = ({ loading, headerTitle, children, backgroundColor }: Props) => {
  return (
    <div className={loading ? styles["header-loaded"] : styles["header"]} style={{ backgroundColor }}>
      {children}
      {headerTitle && <span className={loading ? styles["header-logo-loaded"] : styles["header-logo"]}>{headerTitle}</span>}
    </div>
  )
}

export default Header;
