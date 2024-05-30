export default function TimerChallenge({title,targetTime}){
    return(
        <section className="challenge">
            <h2>{title}</h2>
            <p className="challnge-time">{targetTime} secound{targetTime>1? 's':""}</p>
            <button>start challenge</button>
            <p className="">Time is</p>
        </section>
    )
}