import Loader from 'react-loader-spinner'
import styles from '../styles/components/Loading.module.scss'
import { useEffect } from 'react'

const Loading = () => {
  useEffect(() => {
      const setFillHeight = () => {
        const vh = window.innerHeight * 0.01
        document.documentElement.style.setProperty('--vh', `${vh}px`);
      }

      const setFillWidth = () => {
        const vw = window.innerWidth * 0.01
        document.documentElement.style.setProperty('--vw', `${vw}px`)
      }

      const handleResize = () => {
        setFillHeight();
        setFillWidth();
      }

      const disableScroll = (event: Event) => {
        event.preventDefault()
      }

      window.addEventListener('resize', handleResize, { passive: true });

      // document.addEventListener('touchmove', disableScroll, { passive: false })

      handleResize()
    }, []
  )

  return (
    <div className={styles["loading-container"]}>
      <Loader
        type="MutatingDots"
        color="black"
        secondaryColor="black"
        height={100}
        width={100}
        timeout={0}
      />
    </div>
  )
}
 
export default Loading;
