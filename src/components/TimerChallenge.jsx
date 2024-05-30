import { useRef, useState } from "react"

export default function TimerChallenge({title,targetTime}){
    const timer=useRef();
    const [timerStarted,setTimerStarted]=useState(false);
    const [timerExpired,setTimerExpired]=useState(false)
    function handleStart(){
        timer.current=setTimeout(()=>{
            setTimerExpired(true)
        },targetTime*1000)
        setTimerStarted(true)
    }
    function handleStop(){
        clearTimeout(timer.current)
    }
    return(
        <section className="challenge">
            <h2>{title}</h2>
            {timerExpired &&<p>"You lost!"</p>}
            <p className="challnge-time">{targetTime} secound{targetTime>1? 's':""}</p>
            <button onClick={timerStarted?handleStop:handleStart}>{timerStarted?"stop":"start challenge"}</button>
            <p className={timerStarted?"active":undefined}>{timerStarted?"Time is running ....":"Timer inactive"}</p>
        </section>
    )
}