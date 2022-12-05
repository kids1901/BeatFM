import React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import ReactPlayer from 'react-player'
import volumeOn from '../images/volumeOn.png'
import mute from '../images/mute.png'

let lastPlayedVolume = 0;

const AudioControl = ({
    playPause,
    buttonClass,
    playPauseImage,
    buttonClass2,
    LiveStreamAudio,
    LiveStreamPlayPause,
}) => {
    const handleMute = (e) => {
        let classNameVol = e.target.className;
        
        if (classNameVol === 'volumeOn' || classNameVol === 'audioOnImg') {
            setVolumeImg(mute);
            setUnmute('volumeOff');
            setUnmute2('audioOffImg');
            lastPlayedVolume = volume;
            setVolume(0);
        }else if (classNameVol === 'volumeOff' || className === 'audioOffImg') {
            setVolumeImg(volumeOn);
            setUnmute('volumeOn');
            setUnmute2('audioOnImg');
            setVolume(lastPlayedVolume);
        }
    };

    //unmute/mute change
    const [muteCheck, setUnmute] = useState('volumeOn');
    const [muteCheck2, setUnmute2] = useState('audioOnImg');
    const [volumeImg, setVolumeImg] = useState(volumeOn);
    const [volume, setVolume] = useState(0.15);
    
    return (
        <div className="audioControl">
            <motion.div
                className={buttonClass}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.9 }}
                onClick={playPause}
            >
                <img src={playPauseImage} className={buttonClass2} alt="" />
            </motion.div>

            <motion.div
                className={muteCheck}
                whileHover={{ scale: 1.09 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleMute}
            >
                <img className={muteCheck2} src={volumeImg} alt="" />
            </motion.div>
            
            <div>
                <input
                    className='volumeDial'
                    type='range'
                    min={0}
                    max={1}
                    value={volume}
                    step={0.01}
                    onChange={(e) => {
                        setVolume(e.target.valueAsNumber)
                    }}
                />
            </div>

            <ReactPlayer
                className='liveStreamPlayer'
                playing={LiveStreamPlayPause}
                volume={volume}
                url={LiveStreamAudio}
            />
        </div>
    )
}

export default AudioControl;