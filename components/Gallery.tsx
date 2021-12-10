import Work from './Work'
import styles from '../styles/components/Gallery.module.scss'
import { WorkProps } from '../types/Work'

type Props = {
  works: WorkProps[]
}

const Gallery = (props: Props) =>  {
  return (
    <div className={styles["gallery-container"]}>
      {
        props.works.map((work, i) => <Work imageUrl={work.imageUrl} title={work.title} key={`work${i}`} />)
      }
    </div>
  )
}

export default Gallery
