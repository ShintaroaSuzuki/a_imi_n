import styles from '../styles/components/CloseButton.module.scss'
import { Dispatch, SetStateAction } from 'react'

type Props = {
  setMenuOpened: Dispatch<SetStateAction<Boolean>>;  
}

const CloseButton = ({ setMenuOpened }: Props) => {
  const _onClick = () => {
    setMenuOpened(false)
  }
  
  return (
    <div className={styles["container"]} onClick={() => _onClick()}>
      <div className={styles["bar"]}/>
      <div className={styles["bar"]}/>
    </div>
  )
} 

export default CloseButton;
