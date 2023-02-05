import React, { useContext } from 'react';
import {AiOutlineArrowDown, AiOutlineArrowUp} from 'react-icons/ai';
import { StateContext } from '../../context/Context';
import "../../styles/Plan.css";
import {ImArrowUp2, ImArrowDown2} from 'react-icons/im';

const Plan = (props) => {

  const [state, dispatch] = useContext(StateContext);

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
    </div>
  )
};

export default Plan;