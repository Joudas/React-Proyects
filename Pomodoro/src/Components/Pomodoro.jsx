import React, { useEffect, useState } from 'react'
import "../css/stylePomodoro.css";

export const Pomodoro = () => {
    const soundPomodoro = "/sound-finish.mp3";

    const secondStart = 60*25;
    const secondRest = 60*5;

    const [timeLeft, setTimeLeft] = useState(secondStart);
    const [toggleClick, setToggleClick] = useState("start");
    const [area, setArea] = useState("work");
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let intervalId;
        if(isRunning){
            intervalId = setInterval(() => {
            setTimeLeft(prev => prev-1);
        }, 1000);
        }
        if(timeLeft==12){
            playSound(soundPomodoro);
        }
        if(timeLeft==0){
            if(area == "work"){
                setArea("rest");
                setTimeLeft(secondRest);
            }
            else if(area == "rest"){
                setArea("work");
                setTimeLeft(secondStart);
            }
        }
        return () => clearInterval(intervalId);
    }, [isRunning, timeLeft]);

    const playSound = (pathSound) => {
        const audio = new Audio(pathSound);
        audio.play()
        .catch(err => {
            console.error("Error to reproduce audio", err);
        })

    }

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
    };
    const timeSlap = (seconds) => {
        return formatTime(seconds);
    }

    const handleReset = () => {
        setTimeLeft(secondStart);
        setToggleClick("start"); 
        setArea("work")
    }
    const handleRunning = (mode, running) => {
        setToggleClick(mode); 
        setIsRunning(running)
    }
    
  return (
    <>
    <main>
        <div className={`container ${area == "work" ? "bg" : "bg-secondary"}`}>
            <div className="area">
            {area == "work" ? <span className='truculenta fs-2'>Working</span> : <span className='truculenta fs-2 '>Resting</span>}
            </div>
            <div className="second-container">
                <span className='truculenta fs-3'>{timeSlap(timeLeft)}</span>
            </div>
            <div className="container-button">
            {toggleClick == "start" ? 
            (<>
            <button className={`btn truculenta fs-5 ${area == "work" ? "btn-primary" : "btn-secondary"}`} onClick={() => {handleRunning("run", true)}}>Start</button>
            <button className={`btn truculenta fs-5 ${area == "work" ? "btn-primary" : "btn-secondary"}`} onClick={() => {handleReset()}}>Reset</button></>):
            (<button className={`btn truculenta fs-5 ${area == "work" ? "btn-primary" : "btn-secondary"}`} onClick={() => {handleRunning("start", false)}}>Stop</button>) }
            </div>

        </div>

    </main>
    </>
)
}
