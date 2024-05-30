export default function ResultModle({result,targetTime}){
    return(
        <dialog className="result-modal">
            <h2>{result}</h2>
            <p>The target time was <strong>{targetTime} seconds.</strong></p>
            <p>You stoped the timer with <strong>x time was left</strong></p>
            <form method="dialog">
                <button>Close</button>
            </form>
        </dialog>
    )
}