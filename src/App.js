import React from 'react';
import './App.css';
import Video from './Video';

function App() {
  return (
    <div className="app">
    <div className='app_videos'>
    <Video url="https://v16m-webapp.tiktokcdn-us.com/db692c7cae8022647bd4e4f7e2c6518b/62c2557a/video/tos/useast5/tos-useast5-ve-0068c001-tx/447176dad029461ea9ddd5b8421749f7/?a=1988&ch=0&cr=0&dr=0&lr=tiktok&cd=0%7C0%7C1%7C0&cv=1&br=2648&bt=1324&cs=0&ds=3&ft=ebtHKH-qMyq8ZasY6we2N.vyfl7Gb&mime_type=video_mp4&qs=0&rc=aGk2Z2Q7OTU6ZWUzOzk8NUBpajZkZTo6ZmdpZDMzZzczNEAtLzExNC8xNjQxYDBgLTQ0YSNzcl40cjQwaW5gLS1kMS9zcw%3D%3D&l=202207032050110100020077350020170D7C7C66"
      channel="ssss"
      likes={123}
      messages={456}
    shares={789}
      
    />
   <Video/>
    </div>
    </div>

    /*app container- all videos*/
    /*<Video>*/
     /*<Video>*/
      /*<Video>*/


  );
}

export default App;
