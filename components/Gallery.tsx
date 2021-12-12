import Work from './Work'
import styles from '../styles/components/Gallery.module.scss'
import { WorkProps } from '../types/Work'

type Props = {
  works: WorkProps[]
  loading: Boolean
}

const Gallery = ({ works, loading }: Props) =>  {
  return (
    <div className={loading ? styles["gallery-container-loaded"] : styles["gallery-container"]}>
      {
        works.map((work, i) => <Work imageUrl={work.imageUrl} title={work.title} key={`work${i}`} />)
      }
    </div>
  )
}

export default Gallery
