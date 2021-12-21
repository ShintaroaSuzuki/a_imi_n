import styles from '../styles/components/MenuModal.module.scss'
import Header from './Header'
import CloseButton from './CloseButton'
import { Dispatch, SetStateAction } from 'react'

type Props = {
  setMenuOpened: Dispatch<SetStateAction<Boolean>>;
}

const MenuModal = ({ setMenuOpened }: Props) => {
  return (
    <div className={styles["container"]}>
      <Header backgroundColor="none">
        <CloseButton setMenuOpened={setMenuOpened}/>
      </Header>
      <text>ギャラリー</text>
    </div>
  )
}

export default MenuModal;
