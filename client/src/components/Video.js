import React from 'react'
import VideoLooper from 'react-video-looper';
import sampleVideo from '../svg/Teamvideo.mp4';
 
export const VideoDemo=()=> {
  return (
    <div>
      <VideoLooper src={sampleVideo} start={0} end={4} loop="true"
      width= "318.73px"
      height= "318.58px" 
      />

    </div>
  );
};