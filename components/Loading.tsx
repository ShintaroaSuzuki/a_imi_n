import Loader from 'react-loader-spinner'
import styles from '../styles/components/Loading.module.scss'

const Loading = () => {
  return (
    <div className={styles["loading-container"]}>
      <Loader
        type="MutatingDots"
        color="black"
        secondaryColor="black"
        height={80}
        width={80}
        timeout={0}
      />
    </div>
  )
}
 
export default Loading;
