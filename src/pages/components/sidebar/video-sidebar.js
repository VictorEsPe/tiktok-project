import React, { useState } from 'react'
import './video-sidebar.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import CommentIcon from '@mui/icons-material/Comment'
import ShareIcon from '@mui/icons-material/Share'

function VideoSidebar({likes, comments, shares}) {
  const [liked, setLIked] = useState(false)

  function handleLiked() {
    setLIked(!liked)
  }

  return (
    <div className="video-sidebar">
      <div className="video-sidebar-options" onClick={handleLiked}>
        {/* não é recomendado alterar o tamanho dos ícones desta biblioteca pelo css, mas sim pelo método fonSize */}
        {liked ? (
          <FavoriteIcon fontSize="large" />
        ) : (
          <FavoriteBorderIcon fontSize="large" />
        )}

        <p> {liked ? likes + 1 : likes} </p>
      </div>

      <div className="video-sidebar-options">
        <CommentIcon fontSize="large" />
        <p> {comments} </p>
      </div>

      <div className="video-sidebar-options">
        <ShareIcon fontSize="large" />
        <p> {shares} </p>
      </div>
    </div>
  )
}

export default VideoSidebar
