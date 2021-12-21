import styles from '../styles/components/MenuButton.module.scss' 
import { useState, Dispatch, SetStateAction } from 'react'

type Props = {
  loading: Boolean;
  setMenuOpened: Dispatch<SetStateAction<Boolean>>;
}

const MenuButton = ({loading, setMenuOpened}: Props ) => {
  const [clicked, setClicked] = useState<Boolean>(false);

  const _onClick = () => {
    setClicked(!clicked)
    setMenuOpened(true)
  }

  return (
    <div className={loading ? styles["menuContainer-loaded"] : styles["menuContainer"]} onClick={() => _onClick()}>
      <div className={clicked ? styles['menuBar-clicked'] : styles['menuBar'] } />
      <div className={clicked ? styles['menuBar-clicked'] : styles['menuBar'] } />
    </div>
  )
}

export default MenuButton
