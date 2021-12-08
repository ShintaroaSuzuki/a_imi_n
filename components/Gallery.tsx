import Work from './Work'
import styles from '../styles/components/Gallery.module.scss'

const Gallery = (props) =>  {
  return (
    <div className={styles["gallery-container"]}>
      {
        props.works.map((work, i) => <Work imageUrl={work.imageUrl} title={work.title} key={`work${i}`} />)
      }
    </div>
  )
}

export default Gallery
