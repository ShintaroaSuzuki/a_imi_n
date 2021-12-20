import styles from '../styles/components/MenuButton.module.scss' 
import { useState } from 'react'

const MenuButton = ({loading, setMenuOpened}: {loading: Boolean, setMenuOpened: (menuOpend: Boolean) => void}) => {
  const [clicked, setClicked] = useState<Boolean>(false);

  const _onClick = () => {
    setClicked(!clicked)
    setMenuOpened(true)
  }

  return (
    <div className={loading ? styles["menuContainer-loaded"] : styles["menuContainer"]} onClick={() => setClicked(!clicked)}>
      <div className={clicked ? styles['menuBar-clicked'] : styles['menuBar'] } />
      <div className={clicked ? styles['menuBar-clicked'] : styles['menuBar'] } />
    </div>
  )
}

export default MenuButton
