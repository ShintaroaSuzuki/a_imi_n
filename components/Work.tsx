import Image from 'next/image'
import styles from '../styles/components/Work.module.scss'
import { WorkProps } from '../types/Work'

const Work = (props: WorkProps) => {
  return (
    <div className={styles["work-container"]}>
      <Image src={props.imageUrl} alt="永眠の作品" width={300} height={300} objectFit="contain" />
      <text className={styles["title"]}>{props.title}</text>
    </div>
  )
}

export default Work
