import React, { useRef, useState } from 'react'
import './Video.css'
import VideoFooter from './components/footer/video-footer'
import VideoSidebar from './components/sidebar/video-sidebar'

function Video({url, likes, comments, shares, name, description, music}) {
  const videoRef = useRef(null)
  const [play, setPlay] = useState(false)

  function handleStart() {
    if (play) {
      videoRef.current.pause()
      setPlay(false)
    } else {
      videoRef.current.play()
      setPlay(true)
    }
  }

  return (
    <div className="video">
      <video
        className="video-player"
        ref={videoRef}
        onClick={handleStart}
        src={url}
        loop
      ></video>
      <VideoSidebar 
        likes={likes}
        comments={comments}
        shares={shares}
      />
      <VideoFooter 
        name={name}
        description={description}
        music={music}
      />
    </div>
  )
}

export default Video
