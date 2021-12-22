import styles from '../styles/components/CloseButton.module.scss'
import { useDispatch } from 'react-redux'
import { changeMenuOpened } from '../slices/buttonState'

const CloseButton = () => {
  const _onClick = () => {
    dispatch(changeMenuOpened(false))
  }

  const dispatch = useDispatch()
  
  return (
    <div className={styles["container"]} onClick={() => _onClick()}>
      <div className={styles["bar"]}/>
      <div className={styles["bar"]}/>
    </div>
  )
} 

export default CloseButton;
