import styles from '../styles/components/MenuButton.module.scss' 
import { useState } from 'react'

const MenuButton = () => {
  const [clicked, setClicked] = useState<Boolean>(false);

  return (
    <div className={styles.menuContainer} onClick={() => setClicked(!clicked)}>
      <div className={clicked ? styles['menuBar-clicked'] : styles['menuBar'] } />
      <div className={clicked ? styles['menuBar-clicked'] : styles['menuBar'] } />
    </div>
  )
}

export default MenuButton
