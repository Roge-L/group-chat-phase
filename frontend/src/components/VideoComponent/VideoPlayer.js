import React from 'react';
import { BigPlayButton, ControlBar, Player } from 'video-react';
import '../../styles/VideoPlayer.css';
import {Button} from '@mui/material';

const VideoPlayer = ({audioRef, videoRef, audioUrl, videoUrl}) => {
  return (
    <div className="player-container">
      <div onClick={() => {
            videoRef.current.play();
            audioRef.current.play();}}>
        <Button variant={'outlined'}><strong>PREVIEW VIDEO</strong></Button>
      </div>
      <Player
          className="player-player"
          ref={videoRef}
          src={videoUrl}
      >
        <ControlBar disableCompletely={true}/>
        <BigPlayButton disabled/>
      </Player>
      <div className="player-invisible">
          <Player
              ref={audioRef}
              src={audioUrl}
          />
      </div>
    </div>
  );
}

export default VideoPlayer;