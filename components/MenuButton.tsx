import styles from '../styles/components/MenuButton.module.scss' 
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { changeMenuOpened } from '../slices/buttonState'

type Props = {
  loading: Boolean;
}

const MenuButton = ({ loading }: Props ) => {
  const [clicked, setClicked] = useState<Boolean>(false);

  const _onClick = () => {
    setClicked(!clicked)
    dispatch(changeMenuOpened(true))
  }
  
  const dispatch = useDispatch()

  return (
    <div className={loading ? styles["menuContainer-loaded"] : styles["menuContainer"]} onClick={() => _onClick()}>
      <div className={clicked ? styles['menuBar-clicked'] : styles['menuBar'] } />
      <div className={clicked ? styles['menuBar-clicked'] : styles['menuBar'] } />
    </div>
  )
}

export default MenuButton
