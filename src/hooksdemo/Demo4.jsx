import React, { useState } from 'react'

export default function Demo4() {
 const[score,setScore] = useState(0);

    function scoreone()
    {
        setScore(score+1)
    }
    function scoretwo()
    {
        setScore(score+2)
    }
    function scorefour()
    {
        setScore(score+4)
    }
    function scoresix()
    {
        setScore(score+6)
    }
    function resetzero()
    {
        setScore(0)
    }
  return (
    <div>
        <h2><u>Demo 4</u></h2>
      <h3>Cricket Score App</h3>
      SCORE={score} <br /> <br />
      <button onClick={scoreone}>1 run</button>
      <button onClick={scoretwo}>2 Runs</button>
      <button onClick={scorefour}>4 runs</button>
      <button onClick={scoresix}>6 runs</button>
      <button onClick={resetzero}>Reset Score</button>
    </div>
  )
}
