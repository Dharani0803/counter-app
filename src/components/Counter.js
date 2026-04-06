import { useState } from "react"

function Counter(){
    const [count,setCount]=useState(0)
    const [step, setStep] = useState(1);
    const [attempts, setAttempts] = useState(0);

    function increment(){
        setCount(prev => prev +step)
        setAttempts(prev => prev  + 1);
    }

    function decrement(){
        setCount (prev =>Math.max(0, prev -step))
        setAttempts(prev => prev + 1);
    }

    function reset(){
        setCount(0)
        setAttempts(0)
    }

    return(
        <section class="counter">
        <div class="box">
            <div class="step">
            <label><b>Set your step counter here:</b></label>
            <input type="number" min="1" value={step} onChange={(e) => setStep(Number(e.target.value))} /></div>
            <h1>{count}</h1>
    

{count === 0 ? (<p className="warning"><i class="fa-solid fa-triangle-exclamation"></i>  Minimum limit reached</p>) : 
  (<p className="success">Counter Attempts: {attempts}</p>)}
            <div class="button">
            <div><button class="dec" onClick={decrement}  disabled={count-step<0}><i class="fa-solid fa-minus"></i> Decrement</button></div>
            <div><button class="res" onClick={reset} disabled={count-step<0}><i class="fa-solid fa-arrow-rotate-left" ></i> Reset</button></div>
            <div><button class="inc" onClick={increment}><i class="fa-solid fa-plus"></i> Increment</button></div></div>
        </div></section>
    )
}

export default Counter