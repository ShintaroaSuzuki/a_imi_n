import type { NextPage } from 'next'
import Head from 'next/head'
import { useState, useEffect, useRef } from 'react'
import { VideoTag } from 'react-video-tag'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import MenuButton from '../components/MenuButton'
import MailForm from '../components/MailForm'
import Gallery from '../components/Gallery'
import Loading from '../components/Loading'
import MenuModal from '../components/MenuModal'

const Home: NextPage = () => {
  const [ loading, setLoading ] = useState<Boolean>(true)
  const [ menuOpend, setMenuOpend ] = useState<Boolean>(false)
  const time = useRef<Date>(new Date())

  const handleLoading = (start: Date | undefined) => {
    if (!start) return
    
    const now = new Date()
    const timeDiff = now.getTime() - start.getTime()

    if (timeDiff > 1200) {
      setLoading(false)
    } else {
      setTimeout(() => {
        setLoading(false)
      }, 1200 - timeDiff)
    }
  }
  
  useEffect(() => {
    time.current = new Date()
    window.addEventListener("load", () => handleLoading(time.current), { passive: true })
  })
 
  return (
    <div className={styles.container}>
      <Head>
        <title>えーみーる</title>
        <meta name="description" content="えーみーるのプロフィールサイト" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles["main"]}>
        {loading && <Loading />}
        {menuOpend && <MenuModal/>}
        <Header loading={loading} headerTitle="永海" backgroundColor="white">
          <MenuButton loading={loading}/>
        </Header>
        <div className={loading ? styles["video-conteiner-loaded"] : styles["video-container"]}>
          <VideoTag src="/background.mp4" playsInline autoPlay loop muted className={styles["background-video"]} />
        </div>
        <Gallery 
          loading={loading}
          works={
            [
              { imageUrl: "/work1.jpg", title: "泣いてる私も面倒臭がらずに愛してよ" },
              { imageUrl: "/work2.jpg", title: "死んでるみたいに生きている" },
              { imageUrl: "/work3.jpg", title: "もう良い子じゃないよ" },
              { imageUrl: "/work4.jpg", title: "君のためになんか死んでやらない" },
              { imageUrl: "/work5.jpg", title: "依存させてよ" },
              { imageUrl: "/work6.jpg", title: "いいや、さようなら。" },
              { imageUrl: "/work7.jpg", title: "おしまいにしようか、" },
            ]
          }
        />
        <MailForm loading={loading} />
      </main>

      {/*
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
      */}
    </div>
  )
}

export default Home
