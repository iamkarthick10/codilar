import React, {useState, useRef} from 'react'
import './timer.css'
export default function TimerHook() {
    const [count,setCount] = useState(1000);
    const [active,setActive] = useState(false);
    const countRef = useRef(null);

    const handleStart = () => {
        setActive(true);
        countRef.current = setInterval(() => {
            setCount(count => count+1)
        },1000)

    }
    const handleStop = () => {
        clearInterval(countRef.current);
        setActive(false);

    }
    return (
        <div id="bgBox" class="box">
            <h3 className="pt-3">$ {count}</h3>
            <button className="btn btn-success mx-2 buttonStart" onClick={handleStart}> Start</button>
            <button className="btn btn-warning mx-2 buttonStop" onClick={handleStop}>Stop </button>
            
        </div>
    )
}
