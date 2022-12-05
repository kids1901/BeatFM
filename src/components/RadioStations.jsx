import React from 'react'
import { setActiveStation } from '../hooks/setActiveStation'
import { motion } from 'framer-motion'
import triangle from '../images/playBtn.png'

const RadioStations = ({
    TikTokViralHits,
    TikTokRemix,
    ChineseMusic,
    JFlaCoverSong,
    ChillVillage,
    JapaneseLofi,
    RelaxingSleep,
    KoreanRnB,
    LofiGirl,
    StudyNight,
    LofiJazz,
    CoffeeToGo,
    RainyNights,
    StationName,
}) => {
    return (
        <div className="radioList">
            <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0 }}>
                <motion.div
                    className={
                        setActiveStation(StationName) === 'TikTokViralHits' ? 'activeStation' : 'station'
                    }
                    whileHover={{ scale: 1.09 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={TikTokViralHits}
                >
                    <img
                        className={
                            setActiveStation(StationName) === 'TikTokViralHits' ? 'activeTriangle' : 'triangle'
                        }
                        src={triangle}
                        alt=''
                    />
                    
                    <span> TikTok Hits </span>
                </motion.div>
            </motion.div>

            <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0.15 }}>
                <motion.div
                    className={
                        setActiveStation(StationName) === 'TikTokRemix' ? 'activeStation' : 'station'
                    }
                    whileHover={{ scale: 1.09 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={TikTokRemix}
                >
                    <img
                        className={
                            setActiveStation(StationName) === 'TikTokRemix' ? 'activeTriangle' : 'triangle'
                        }
                        src={triangle}
                        alt=''
                    />
                    
                    <span> TikTok Remix </span>
                </motion.div>
            </motion.div>

            <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0.25 }}>
                <motion.div
                    className={
                        setActiveStation(StationName) === 'ChineseMusic' ? 'activeStation' : 'station'
                    }
                    whileHover={{ scale: 1.09 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={ChineseMusic}
                >
                    <img
                        className={
                            setActiveStation(StationName) === 'ChineseMusic' ? 'activeTriangle' : 'triangle'
                        }
                        src={triangle}
                        alt=''
                    />
                    
                    <span> Chinese Music </span>
                </motion.div>
            </motion.div>

            <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0.35 }}>
                <motion.div
                    className={
                        setActiveStation(StationName) === 'JFlaCoverSong' ? 'activeStation' : 'station'
                    }
                    whileHover={{ scale: 1.09 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={JFlaCoverSong}
                >
                    <img
                        className={
                            setActiveStation(StationName) === 'JFlaCoverSong' ? 'activeTriangle' : 'triangle'
                        }
                        src={triangle}
                        alt=''
                    />
                    
                    <span> JFla Cover Song </span>
                </motion.div>
            </motion.div>

            <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0.45 }}>
                <motion.div
                    className={
                        setActiveStation(StationName) === 'ChillVillage' ? 'activeStation' : 'station'
                    }
                    whileHover={{ scale: 1.09 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={ChillVillage}
                >
                    <img
                        className={
                            setActiveStation(StationName) === 'ChillVillage' ? 'activeTriangle' : 'triangle'
                        }
                        src={triangle}
                        alt=''
                    />
                    
                    <span> Chill Village </span>
                </motion.div>
            </motion.div>

            <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0.55 }}>
                <motion.div
                    className={
                        setActiveStation(StationName) === 'JapaneseLofi' ? 'activeStation' : 'station'
                    }
                    whileHover={{ scale: 1.09 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={JapaneseLofi}
                >
                    <img
                        className={
                            setActiveStation(StationName) === 'JapaneseLofi' ? 'activeTriangle' : 'triangle'
                        }
                        src={triangle}
                        alt=''
                    />
                    
                    <span> Japanese Lofi </span>
                </motion.div>
            </motion.div>

            <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0.65 }}>
                <motion.div
                    className={
                        setActiveStation(StationName) === 'RelaxingSleep' ? 'activeStation' : 'station'
                    }
                    whileHover={{ scale: 1.09 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={RelaxingSleep}
                >
                    <img
                        className={
                            setActiveStation(StationName) === 'RelaxingSleep' ? 'activeTriangle' : 'triangle'
                        }
                        src={triangle}
                        alt=''
                    />
                    
                    <span> Relaxing Sleep </span>
                </motion.div>
            </motion.div>

            <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0.75 }}>
                <motion.div
                    className={
                        setActiveStation(StationName) === 'KoreanRnB' ? 'activeStation' : 'station'
                    }
                    whileHover={{ scale: 1.09 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={KoreanRnB}
                >
                    <img
                        className={
                            setActiveStation(StationName) === 'KoreanRnB' ? 'activeTriangle' : 'triangle'
                        }
                        src={triangle}
                        alt=''
                    />
                    
                    <span> Korean RnB </span>
                </motion.div>
            </motion.div>

            <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0.85 }}>
                <motion.div
                    className={
                        setActiveStation(StationName) === 'LofiGirl' ? 'activeStation' : 'station'
                    }
                    whileHover={{ scale: 1.09 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={LofiGirl}
                >
                    <img
                        className={
                            setActiveStation(StationName) === 'LofiGirl' ? 'activeTriangle' : 'triangle'
                        }
                        src={triangle}
                        alt=''
                    />
                    
                    <span> Lofi Girl </span>
                </motion.div>
            </motion.div>

            <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0.95 }}>
                <motion.div
                    className={
                        setActiveStation(StationName) === 'StudyNight' ? 'activeStation' : 'station'
                    }
                    whileHover={{ scale: 1.09 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={StudyNight}
                >
                    <img
                        className={
                            setActiveStation(StationName) === 'StudyNight' ? 'activeTriangle' : 'triangle'
                        }
                        src={triangle}
                        alt=''
                    />
                    
                    <span> Study Night </span>
                </motion.div>
            </motion.div>

            <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 1.05 }}>
                <motion.div
                    className={
                        setActiveStation(StationName) === 'LofiJazz' ? 'activeStation' : 'station'
                    }
                    whileHover={{ scale: 1.09 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={LofiJazz}
                >
                    <img
                        className={
                            setActiveStation(StationName) === 'LofiJazz' ? 'activeTriangle' : 'triangle'
                        }
                        src={triangle}
                        alt=''
                    />
                    
                    <span> Lofi Jazz </span>
                </motion.div>
            </motion.div>

            <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 1.15 }}>
                <motion.div
                    className={
                        setActiveStation(StationName) === 'CoffeeToGo' ? 'activeStation' : 'station'
                    }
                    whileHover={{ scale: 1.09 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={CoffeeToGo}
                >
                    <img
                        className={
                            setActiveStation(StationName) === 'CoffeeToGo' ? 'activeTriangle' : 'triangle'
                        }
                        src={triangle}
                        alt=''
                    />
                    
                    <span> Coffee to go </span>
                </motion.div>
            </motion.div>

            <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 1.25 }}>
                <motion.div
                    className={
                        setActiveStation(StationName) === 'RainyNights' ? 'activeStation' : 'station'
                    }
                    whileHover={{ scale: 1.09 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={RainyNights}
                >
                    <img
                        className={
                            setActiveStation(StationName) === 'RainyNights' ? 'activeTriangle' : 'triangle'
                        }
                        src={triangle}
                        alt=''
                    />
                    
                    <span> Rainy Nights </span>
                </motion.div>
            </motion.div>
        </div>
    );
}

export default RadioStations;