import React, { useState, useRef } from 'react';
import '../styles/PlanCreate.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import VideoChat from './VideoComponent';
import { Player, ControlBar } from 'video-react';
import 'video-react/dist/video-react.css';

const PlanCreate = () => {
    const [formData, setFormData] = useState({
        name: '',
        date: '',
        start_datetime: '',
        end_datetime: '',
        videoUrl: '',
        audioUrl: '',
    });
    const [vidComplete, setVidComplete] = useState(false);
    const [vidPopoutOpen, setVidPopoutOpen] = useState(false);
    const vidPlayer = useRef(null);
    const audPlayer = useRef(null);

    const { name, date, start_datetime, end_datetime} = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        console.log(formData);
    };

    const updateVideoUrl = (obj) => {
        if (obj) {
            setVidComplete(true);
            console.log(obj,13412343431)
            setFormData({ ...formData,
                videoUrl: obj.video,
                audioUrl: obj.audio,
            })
        }
    }

    const displayVideoChat = () => {
        if (vidComplete) {
            return null;
        } else {
            return (
                <VideoChat setVidUrl={updateVideoUrl}/>
            )
        }
    }

    return (
        <div className='container'>
            <Popup trigger={<button className='popup'>Make Plan</button>} modal="nested">
                {
                    close => (
                            <div className='form-container'>
                            <h1 className='title'>Plan</h1>
                            <h3 className='header'>Create a Plan</h3>
                            <form onSubmit={e => onSubmit(e)}>
                                <div className='form-group'>
                                    <input
                                        className='form-control'
                                        type='name'
                                        placeholder='Plan Name'
                                        name='name'
                                        value={name}
                                        onChange={e => onChange(e)}
                                        required
                                    />
                                </div>
                                <div className='container_div_1'>
                                    {vidComplete && formData.videoUrl && formData.audioUrl &&
                                    <div>
                                        <button onClick={() => {
                                            vidPlayer.current.play();
                                            audPlayer.current.play();
                                        }}>PREVIEW VIDEO</button>
                                        <Player
                                            ref={vidPlayer}
                                            src={formData.videoUrl}
                                        >
                                            <ControlBar/>
                                        </Player>
                                        <div style={{display: "none"}}>
                                            <Player
                                                ref={audPlayer}
                                                src={formData.audioUrl}
                                            />
                                        </div>
                                    </div>
                                    }
                                    {vidPopoutOpen && displayVideoChat()}
                                    <button className='btn btn-primary' onClick={() => setVidPopoutOpen(!vidPopoutOpen)} disabled={vidPopoutOpen}>
                                        Click to start recording
                                    </button>
                                </div>
                                <div className='form-group'>
                                    <label className='form-label'>Date</label>
                                    <input
                                        className='form-control'
                                        type='date'
                                        placeholder='Date'
                                        name='date'
                                        value={date}
                                        onChange={e => onChange(e)}
                                        required
                                    />
                                </div>
                                <div className='form-group'>
                                    <label className='form-label'>Start Time</label>
                                    <input
                                        className='form-control'
                                        type='time'
                                        placeholder='Start Time'
                                        name='start_datetime'
                                        value={start_datetime}
                                        onChange={e => onChange(e)}
                                        required
                                    />
                                </div>
                                <div className='form-group'>
                                    <label className='form-label'>End Time</label>
                                    <input
                                        className='form-control'
                                        type='time'
                                        placeholder='End Time'
                                        name='end_datetime'
                                        value={end_datetime}
                                        onChange={e => onChange(e)}
                                    />

                                </div>
                                <div className='form-group'>
                                    <button className='form-btn' type='submit'>Make Plan</button>
                                </div>
                                {/* <div>
                                    <button onClick=
                                        {() => {
                                            close();
                                            setFormData({
                                                name: '',
                                                date: '',
                                                start_datetime: '',
                                                end_datetime: '',
                                                videoUrl: {},
                                            });
                                            setVidComplete(false);
                                            setVidPopoutOpen(false);
                                        }}>
                                            Close modal
                                    </button>
                                </div> */}
                            </form>
                            </div>
                    )
                }
            </Popup> 
        </div>
    )
};

export default PlanCreate