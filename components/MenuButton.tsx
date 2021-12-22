import styles from '../styles/components/MenuButton.module.scss' 
import { useSelector, useDispatch } from 'react-redux'
import { changeMenuOpened, changeClicked, selectClicked } from '../slices/buttonState'

type Props = {
  loading: Boolean;
}

const MenuButton = ({ loading }: Props ) => {

  const _onClick = () => {
    dispatch(changeClicked(true))
    setTimeout(() => dispatch(changeMenuOpened(true)), 300)
  }
  
  const dispatch = useDispatch()
  const clicked = useSelector(selectClicked)

  return (
    <div className={loading ? styles["menuContainer-loaded"] : styles["menuContainer"]} onClick={() => _onClick()}>
      <div className={clicked ? styles['menuBar-clicked'] : styles['menuBar'] } />
      <div className={clicked ? styles['menuBar-clicked'] : styles['menuBar'] } />
    </div>
  )
}

export default MenuButton
