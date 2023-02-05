import React, { useContext, useRef } from 'react';
import {AiOutlineArrowDown, AiOutlineArrowUp} from 'react-icons/ai';
import { StateContext } from '../../context/Context';
import "../../styles/Plan.css";
import {ImArrowUp2, ImArrowDown2} from 'react-icons/im';
import Popup from 'reactjs-popup';
import VideoPlayer from '../VideoComponent/VideoPlayer';
import 'reactjs-popup/dist/index.css';
import { Button } from '@mui/material';

const Plan = (props) => {

  const [state, dispatch] = useContext(StateContext);
  const vidRef = useRef(null);
  const audRef = useRef(null);

  return (
    <div className="plan-main">
      <div className="plan-arrows">
        <ImArrowUp2/>
        <div className="plan-vote-count">{props.votes}</div>
        <ImArrowDown2/>
      </div>

      <div className="plan-body">
        <div className="plan-title">{props.title}</div>
        <div className="plan-description">{props.description}</div>
      </div>
      <Popup trigger={<div><Button> Check Prompt</Button></div>} position="right center">
        <div className="plan-video">
          <VideoPlayer
            audioRef={audRef} videoRef={vidRef} audioUrl={props.twilioAudUrl} videoUrl={props.twilioVidUrl}
          />
        </div>
      </Popup>
    </div>
  )
};

export default Plan;