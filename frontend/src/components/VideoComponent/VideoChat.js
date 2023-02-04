import React, { useState, useCallback, useEffect } from "react";
import Video from "twilio-video";
import Room from "./Room";
import {v4} from 'uuid';
import './styles.css';

const VideoChat = ({setVidUrl}) => {
  const username = 'username' + v4().toString();
  const roomName = 'room' + v4().toString();
  const [room, setRoom] = useState(null);
  const [roomSID, setRoomSID] = useState(null);

  useEffect(() => {
    const runIt = async () => {
      const data = await fetch("/video/token", {
        method: "POST",
        body: JSON.stringify({
          identity: username,
          room: roomName,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => res.json());
      Video.connect(data.token, {
        name: roomName,
      })
        .then((room) => {
          setRoomSID(room.sid);
          setRoom(room);
        })
        .catch((err) => {
          console.error(err);
        });
    };
    runIt();
  }, [])

  // useEffect(() => {
  //   console.log(roomSID, 'useeffect test')
  // }, [roomSID])

  const handleLogout = useCallback(() => {
    setRoom((prevRoom) => {
      if (prevRoom) {
        prevRoom.localParticipant.tracks.forEach((trackPub) => {
          trackPub.track.stop();
        });
        prevRoom.disconnect();
      }
    });

    const lookUpVidRecording = async(sid) => {
      const response = await fetch("/video/recording", {
        method: "POST",
        body: JSON.stringify({
          roomSID: sid
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => res.json()).catch(err => console.error(err));
      const audio = response.audio;
      const video = response.video;
      if (audio && video) {
        setVidUrl(response)
      }
    }
    // CHECK FOR VALID SID AND LOOK FOR RECORDING URL
    if (roomSID) {
      lookUpVidRecording(roomSID);
    }
  }, [roomSID]);

  return (
    <div>
      {
        room ? 
        <Room roomName={roomName} room={room} handleLogout={handleLogout} />
        :
        null
      }
    </div>
  )
};

export default VideoChat;
