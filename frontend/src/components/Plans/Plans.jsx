import React, { useContext } from 'react';
import { StateContext } from '../../context/Context';
import Plan from './Plan';
import "../../styles/Plans.css";

const Plans = () => {

  const [state, dispatch] = useContext(StateContext);
  const currentGroup = state.currentGroup;  
  const plans = currentGroup != null? state.groups[currentGroup].plans : [];

  return (
    <div className="plans-main">
      <div className="plans-header">Your Plans</div>

      <div className="plans-container">
        {plans.map(args => 
          <Plan {...args} key={args.id}></Plan>
        )}
      </div>

    </div>
  );
}

export default Plans;