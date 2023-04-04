import './App.css'
import Video from './pages/Video'
import React, { useEffect, useState } from 'react'
import db from './config/firebase'
import { collection, getDocs } from 'firebase/firestore/lite'

function App() {
  const [video, setVideos] = useState([])

  // o comando "async" e "await" diz ao js que ele deve esperar esta função coletar todos os dados antes de executar o resto
  async function getVideos() {
    const videoCollection = collection(db, 'videos')
    const videosSnapshot = await getDocs(videoCollection)
    const videosList = videosSnapshot.docs.map((doc) => doc.data())

    setVideos(videosList)
  }

  useEffect(() => {
    getVideos()
  }, [])

  // evita que o menu de alguns celulares sobreponha os elementos da página
  let maxHeight;

  if (window.innerHeight <= 800) {
    maxHeight = window.innerHeight
  }

  return (
    <div className="App" style={{ maxHeight: maxHeight + 'px' }}>
      <div className="app-video">
        
        {video.map((item) => {
          return (
            <Video
              url={item.url}
              likes={item.likes}
              comments={item.comments}
              shares={item.shares}
              name={item.name}
              description={item.description}
              music={item.music}
            />
          )
        })}

      </div>
    </div>
  )
}

export default App
