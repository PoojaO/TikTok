import React from 'react'
import "./VideoFooter.css"
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import Ticker from "react-ticker";


function VideoFooter(channel, description, song) {
  return (
    <div className='videoFooter'>
              <div className='videoFooter_text>'>
                            <h3>@test</h3>
                            <p>test</p>
                            <div className='videoFooter_ticker '>
                                   <MusicNoteIcon className="videoFooter_icon"/>   
                                   <Ticker  mode='smooth'>
                              {({index}) => (
                                           <>
                                           <p>test</p>
                                          </>
                                           )}
                                   </Ticker>      
                            </div>
              </div>
              <img className='videoFooter_record'
              src='https://static.thenounproject.com/png/934821-200.png'
              alt='spinning'/>
    </div>
  )
}

export default VideoFooter;