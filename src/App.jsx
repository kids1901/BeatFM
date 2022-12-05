import './styles/index.css';
import './styles/audioControl.css';
// require('dotenv').config()

import pauseImg from './images/pause.png';
import github from './images/github.png';
import play from './images/playBtn.png';

import RadioStations from './components/RadioStations';
import AudioControls from './components/AudioControl';
import PauseImage from './components/PauseImage';
import AdditionalSettings from './components/AdditionalInfo';
import Loading from './components/LoadingImage';

import { useState } from 'react';
import { motion } from 'framer-motion'
import ReactPlayer from 'react-player'

function App() {
    //Pause play change
    const [BtnClass, setBtnClass] = useState('PlayPause');
    const [BtnClass2, setBtnClass2] = useState('playBtn');
    const [playPauseImg, setPlayPause] = useState(play);

    //Live stream
    const [liveStream, playLiveStream] = useState(false);
    const [pauseScreen, setPauseScreen] = useState('pauseScreen');
    const [currentLivestream, setLivestream] = useState('https://www.youtube.com/watch?v=5qap5aO4i9A&ab_channel=LofiGirl');

    //Station
    const [activeStation, setActiveStationState] = useState(false);
    const [stationName, setStationName] = useState('LofiGirl');
    const [youtubeChannel, setYoutubeChannel] = useState('');

    const handlePausePlaySwitch = (e) => {
        let className = e.target.className;

        if (className === 'PlayPause' || className === 'playBtn') {
            setPlayPause(pauseImg);
            setBtnClass('PlayPause2');
            setBtnClass2('playBtn2');
            start();
        } else if (className === 'PlayPause2' || className === 'playBtn2') {
            setPlayPause(play);
            setBtnClass('PlayPause');
            setBtnClass2('playBtn');
            pause();
        }
    };

    const start = () => {
        playLiveStream(false);
        playLiveStream(true);
        setPauseScreen('unpauseScreen');
    };

    const pause = () => {
        setPauseScreen('pauseScreen');
        playLiveStream(false);
    };

    const [video, setVideo] = useState(import.meta.env.VITE_LOFIGIRL_VIDEO);

    //Radio change section
    const LofiGirlVideo = () => {
        setVideo(import.meta.env.VITE_LOFIGIRL_VIDEO);
        setStationName('LofiGirl');
        setYoutubeChannel(import.meta.env.VITE_LOFIGIRL_CHANNEL);
        setLivestream(import.meta.env.VITE_LOFIGIRL_VIDEO);
        playLiveStream(true);
        setPauseScreen('unpauseScreen');
        setPlayPause(pauseImg);
        setBtnClass('PlayPause2');
        setBtnClass2('playBtn2');
        setActiveStationState(true);
    };
    
    const TikTokViralHits = () => {
        setVideo(import.meta.env.VITE_TIKTOKHITS_VIDEO);
        setStationName('TikTok Viral Hits 2023');
        setYoutubeChannel(import.meta.env.VITE_TIKTOKHITS_CHANNEL);
        setLivestream(import.meta.env.VITE_TIKTOKHITS_VIDEO);
        playLiveStream(true);
        setPauseScreen('unpauseScreen');
        setPlayPause(pauseImg);
        setBtnClass('PlayPause2');
        setBtnClass2('playBtn2');
    };

    const TikTokRemix = () => {
        setVideo(import.meta.env.VITE_TIKTOKREMIX_VIDEO);
        setStationName('TikTok Remix');
        setYoutubeChannel(import.meta.env.VITE_TIKTOKREMIX_CHANNEL);
        setLivestream(import.meta.env.VITE_TIKTOKREMIX_VIDEO);
        playLiveStream(true);
        setPauseScreen('unpauseScreen');
        setPlayPause(pauseImg);
        setBtnClass('PlayPause2');
        setBtnClass2('playBtn2');
    };

    const ChineseMusic = () => {
        setVideo(import.meta.env.VITE_CHINESEMUSIC_VIDEO);
        setStationName('Chinese Music');
        setYoutubeChannel(import.meta.env.VITE_CHINESEMUSIC_CHANNEL);
        setLivestream(import.meta.env.VITE_CHINESEMUSIC_VIDEO);
        playLiveStream(true);
        setPauseScreen('unpauseScreen');
        setPlayPause(pauseImg);
        setBtnClass('PlayPause2');
        setBtnClass2('playBtn2');
    };

    const JFlaCoverSong = () => {
        setVideo(import.meta.env.VITE_JFLACOVERSONG_VIDEO);
        setStationName('JFla Cover Song');
        setYoutubeChannel(import.meta.env.VITE_JFLACOVERSONG_CHANNEL);
        setLivestream(import.meta.env.VITE_JFLACOVERSONG_VIDEO);
        playLiveStream(true);
        setPauseScreen('unpauseScreen');
        setPlayPause(pauseImg);
        setBtnClass('PlayPause2');
        setBtnClass2('playBtn2');
    };

    const ChillVillage = () => {
        setVideo(import.meta.env.VITE_CHILLVILLAGE_VIDEO);
        setStationName('Chill Village');
        setYoutubeChannel(import.meta.env.VITE_CHILLVILLAGE_CHANNEL);
        setLivestream(import.meta.env.VITE_CHILLVILLAGE_VIDEO);
        playLiveStream(true);
        setPauseScreen('unpauseScreen');
        setPlayPause(pauseImg);
        setBtnClass('PlayPause2');
        setBtnClass2('playBtn2');
    };

    const JapaneseLofi = () => {
        setVideo(import.meta.env.VITE_JAPANESELOFI_VIDEO);
        setStationName('Japanese Lofi');
        setYoutubeChannel(import.meta.env.VITE_JAPANESELOFI_CHANNEL);
        setLivestream(import.meta.env.VITE_JAPANESELOFI_VIDEO);
        playLiveStream(true);
        setPauseScreen('unpauseScreen');
        setPlayPause(pauseImg);
        setBtnClass('PlayPause2');
        setBtnClass2('playBtn2');
    };

    const RelaxingSleep = () => {
        setVideo(import.meta.env.VITE_RELAXINGSLEEP_VIDEO);
        setStationName('Relaxing Sleep Music');
        setYoutubeChannel(import.meta.env.VITE_RELAXINGSLEEP_CHANNEL);
        setLivestream(import.meta.env.VITE_RELAXINGSLEEP_VIDEO);
        playLiveStream(true);
        setPauseScreen('unpauseScreen');
        setPlayPause(pauseImg);
        setBtnClass('PlayPause2');
        setBtnClass2('playBtn2');
    };

    const KoreanRnB = () => {
        setVideo(import.meta.env.VITE_KOREANRNB_VIDEO);
        setStationName('Korean R&B');
        setYoutubeChannel(import.meta.env.VITE_KOREANRNB_CHANNEL);
        setLivestream(import.meta.env.VITE_KOREANRNB_VIDEO);
        playLiveStream(true);
        setPauseScreen('unpauseScreen');
        setPlayPause(pauseImg);
        setBtnClass('PlayPause2');
        setBtnClass2('playBtn2');
    };

    const StudyNight = () => {
        setVideo(import.meta.env.VITE_STUDYNIGHT_VIDEO);
        setStationName('Study Night');
        setYoutubeChannel(import.meta.env.VITE_STUDYNIGHT_CHANNEL);
        setLivestream(import.meta.env.VITE_STUDYNIGHT_VIDEO);
        playLiveStream(true);
        setPauseScreen('unpauseScreen');
        setPlayPause(pauseImg);
        setBtnClass('PlayPause2');
        setBtnClass2('playBtn2');
    };

    const LofiJazz = () => {
        setVideo(import.meta.env.VITE_LOFIJAZZ_VIDEO);
        setStationName('Lofi Jazz');
        setYoutubeChannel(import.meta.env.VITE_LOFIJAZZ_CHANNEL);
        setLivestream(import.meta.env.VITE_LOFIJAZZ_VIDEO);
        playLiveStream(true);
        setPauseScreen('unpauseScreen');
        setPlayPause(pauseImg);
        setBtnClass('PlayPause2');
        setBtnClass2('playBtn2');
    };

    const CoffeeToGo = () => {
        setVideo(import.meta.env.VITE_COFFEETOGO_VIDEO);
        setStationName('Coffee To Go');
        setYoutubeChannel(import.meta.env.VITE_COFFEETOGO_CHANNEL);
        setLivestream(import.meta.env.VITE_COFFEETOGO_VIDEO);
        playLiveStream(true);
        setPauseScreen('unpauseScreen');
        setPlayPause(pauseImg);
        setBtnClass('PlayPause2');
        setBtnClass2('playBtn2');
    };

    const RainyNights = () => {
        setVideo(import.meta.env.VITE_RAINYNIGHT_VIDEO);
        setStationName('Rainy Nights');
        setYoutubeChannel(import.meta.env.VITE_RAINYNIGHT_CHANNEL);
        setLivestream(import.meta.env.VITE_RAINYNIGHT_VIDEO);
        playLiveStream(true);
        setPauseScreen('unpauseScreen');
        setPlayPause(pauseImg);
        setBtnClass('PlayPause2');
        setBtnClass2('playBtn2');
    };

    return (
        <div className="interfaceContainer">
            <div className="radioContainer">
                <div className="logo">StudyBeats</div>
                <div className="subHeading"></div>

                <div className="radioStationsContainer">
                    <RadioStations
                        TikTokViralHits={TikTokViralHits}
                        TikTokRemix={TikTokRemix}
                        ChineseMusic={ChineseMusic}
                        JFlaCoverSong={JFlaCoverSong}
                        ChillVillage={ChillVillage}
                        JapaneseLofi={JapaneseLofi}
                        RelaxingSleep={RelaxingSleep}
                        KoreanRnB={KoreanRnB}
                        LofiGirl={LofiGirlVideo}
                        StudyNight={StudyNight}
                        LofiJazz={LofiJazz}
                        CoffeeToGo={CoffeeToGo}
                        RainyNights={RainyNights}
                        StationName={stationName}
                    />
                </div>

                <div className="socialsContainer2">
                    <div className="socials">
                        <motion.div
                            className="link"
                            whileHover={{ scale: 1.09 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => {
                                window.open('https://github.com/kids1901');
                            }}
                        >
                            <img className='githubLogo' src={github} alt='' />Github
                        </motion.div>
                    </div>
                </div>
            </div>

            <div className="audioControlContainer">
                <AudioControls
                    playPause={handlePausePlaySwitch}
                    buttonClass={BtnClass}
                    playPauseImage={playPauseImg}
                    buttonClass2={BtnClass2}
                    LiveStreamAudio={currentLivestream}
                    LiveStreamPlayPause={liveStream}
                />
            </div>

            <div className={pauseScreen}>
                <PauseImage />
                <p style={{ marginTop: '0rem' }} >Music Paused</p>
            </div>

            <AdditionalSettings youtube={youtubeChannel} radio={stationName} />

            <div className="videoContainer">
                <ReactPlayer
                    className='vid'
                    width='127%'
                    height='132%'
                    loop='true'
                    playing={liveStream}
                    volume='mute'
                    url={video}
                />
            </div>

            <Loading />

        </div>
    );
}

export default App;
