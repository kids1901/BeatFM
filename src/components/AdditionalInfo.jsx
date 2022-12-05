import React from 'react'
import rain from '../images/rain.png'
import waves from '../images/waves.png'
import whiteNoise from '../images/whiteNoise.png'
import youtube from '../images/youtube.png'
import RainASMR from '../Sounds/rain.mp3'
import OceanASMR from '../Sounds/Ocean.mp3'
import WhiteNoiseASMR from '../Sounds/whiteNoise.mp3'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const Rain = new Audio(RainASMR);
const Ocean = new Audio(OceanASMR);
const WhiteNoise = new Audio(WhiteNoiseASMR);

const AdditionalSettings = (props) => {
    const [rainVolume, setRainVolume] = useState(0);
    const [oceanVolume, setOceanVolume] = useState(0);
    const [whiteNoiseVolume, setWhiteNoiseVolume] = useState(0);

    const [transitionValue, setTransitionValue] = useState(0);
    const [TitleLocation, setTitleLocation] = useState(350);

    Ocean.volume = oceanVolume;
    Rain.volume = rainVolume;
    WhiteNoise.volume = whiteNoiseVolume;

    Rain.play();
    Ocean.play();
    WhiteNoise.play();

    const setTransition = () => {
        setTransitionValue(0);
    }

    setTimeout(function () {
        setTransitionValue(-450); //Title pop in and out
        setTitleLocation(420);
    }, 2000);

    useEffect(() => {
        setTransition();
        setTitleLocation(1000);
    }, [props.radio]);

    return (
        <div className="infoContainer">
            <div className="time"></div>
            <div className="songName">
                <motion.div
                    className="radioStationTitle"
                    animate={{ x: transitionValue }}
                    transition={{ delay: 1 }}
                    style={{ left: TitleLocation }}
                >
                    {props.radio}
                    <div className="socialsContainer">
                        <a target="_blank" href={props.youtube} >
                            {" "}
                            <img src={youtube} className="socialIcons" alt='' />{" "}
                        </a>
                    </div>
                </motion.div>
            </div>

            <div className="otherSoundsContainer">
                <div className="align">
                    <input
                        className="soundDial"
                        type="range"
                        orient="vertical"
                        min={0}
                        max={1}
                        value={rainVolume}
                        onChange={(e) => {
                            setRainVolume(e.target.valueAsNumber);
                        }}
                        step={0.2}
                    />

                    <div className="otherSounds">
                        <img src={rain} className="imgSizing" alt='' />
                    </div>
                </div>

                <div className="align">
                    <input
                        className="soundDial"
                        type="range"
                        orient="vertical"
                        min={0}
                        max={1}
                        value={oceanVolume}
                        onChange={(e) => {
                            setOceanVolume(e.target.valueAsNumber);
                        }}
                        step={0.2}
                    />

                    <div className="otherSounds">
                        <img src={waves} className="imgSizing" alt='' />
                    </div>
                </div>

                <div className="align">
                    <input
                        className="soundDial"
                        type="range"
                        orient="vertical"
                        min={0}
                        max={1}
                        value={whiteNoiseVolume}
                        onChange={(e) => {
                            setWhiteNoiseVolume(e.target.valueAsNumber);
                        }}
                        step={0.2}
                    />

                    <div className="otherSounds">
                        <img src={whiteNoise} className="imgSizing" alt='' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdditionalSettings;