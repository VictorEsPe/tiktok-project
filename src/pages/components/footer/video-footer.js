import React from 'react'
import './video-footer.css'
import MusicNoteIcon from '@mui/icons-material/MusicNote'

function VideoFooter({name, description, music}) {
  return (
    <div className="video-footer">
      <div className="video-footer-info">
        <h3>@{name}</h3>
        <p>{description}</p>

        <div className="video-footer-music">
          <MusicNoteIcon className="music-note-icon" />

          <div className="video-music-name">
            <p>{music}</p>
          </div>
        </div>
      </div>

      <img
        className="video-footer-record"
        src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png"
        alt="Disco de vinil girando"
      />
    </div>
  )
}

export default VideoFooter