import React from 'react';
import { ChannelBox } from "planby";
import '../../../styles/Calendar.css'
import Upvote from 'react-upvote';

const ChannelItem = ({ channel }) => {
  const { position, label } = channel;
  return (
    <ChannelBox {...position}>
      {/* Overwrite styles by add eg. style={{ maxHeight: 52, maxWidth: 52,... }} */}
      {/* Or stay with default styles */}
      {/* <ChannelLogo
        src={logo}
        alt="Logo"
        style={{ maxHeight: 52, maxWidth: 52 }}
      /> */}
      <span className='channel-item-label'>{label}</span>
    </ChannelBox>
  );
};

export default ChannelItem;