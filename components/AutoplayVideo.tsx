import Image from 'next/image'
import { useRef, useEffect, useState } from 'react'
import styles from '../styles/components/AutoplayVideo.module.scss'

type Props = {
  videoUrl: string;
  loading: Boolean;
}

const AutoplayVideo = ({ videoUrl, loading }: Props) => {
  const videoParentRef = useRef<HTMLDivElement>(null);
  const [shouldUseImage, setShouldUseImage] = useState(false);
  useEffect(() => {
    const isSafari = () => {
      const ua = navigator.userAgent.toLowerCase();
      return ua.indexOf("safari") > -1 && ua.indexOf("chrome") < 0
    }

    // check if user agent is safari and we have the ref to the container <div />
    if (isSafari() && videoParentRef.current) {
      // obtain reference to the video element
      const player = videoParentRef.current.children[0] as HTMLVideoElement;

      // if the reference to video player has been obtained
      if (player) {
        // set the video attributes using javascript as per the
        // webkit Policy
        player.controls = false;
        player.playsInline = true;
        player.muted = true;
        player.setAttribute("muted", ""); // leave no stones unturned :)
        player.autoplay = true;

        // Let's wait for an event loop tick and be async.
        setTimeout(() => {
          // player.play() might return a promise but it's not guaranteed crossbrowser.
          const promise = player.play();
          // let's play safe to ensure that if we do have a promise
          if (promise.then) {
            promise
              .then(() => {})
              .catch(() => {
                // if promise fails, hide the video and fallback to <img> tag
                videoParentRef.current!.style.display = "none";
                setShouldUseImage(true);
              });
          }
        }, 0);
      }
    }
  }, []);

  return (
    <div
      ref={videoParentRef}
      className={loading ? styles["video-conteiner-loaded"] : styles["video-container"]}
      dangerouslySetInnerHTML={{
        __html: `
        <video
          loop
          muted
          autoplay
          playsinline
          preload="metadata"
        >
          <source src="${videoUrl}" type="video/mp4" />
        </video>`
      }}
    />
  );
}

export default AutoplayVideo;
