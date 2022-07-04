import React, { useState } from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MessageIcon from '@mui/icons-material/Message';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import "./VideoSidebar.css"

function VideoSidebar() {
  const [liked, setLiked]= useState(false)
  return (
    <div className='videoSidebar'>
    <div className='videoSidebar_button'>
    {liked ?(
<FavoriteIcon frontsize="large" onClick={
  (e)=> setLiked(false)}/>
    ):(
<FavoriteBorderIcon frontsize="large" 
onClick={(e)=>setLiked(true)}/>
    )}

<p> {liked ? 101 : 100 }</p>
    </div>
    <div className='videoSidebar_button'>
<ShareIcon frontsize="large"/>
<p>3</p>
    </div>
    <div className='videoSidebar_button'>
<MessageIcon frontsize="large"/>
<p>5</p>
    </div>
    </div>
  )
}

export default VideoSidebar