import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MessageIcon from '@mui/icons-material/Message';
import "./VideoSidebar.css"

function VideoSidebar() {
  return (
    <div className='videoSidebar'>
    <div className='videoSidebar_button'>
<FavoriteIcon frontsize="large"/>
<p>100</p>
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