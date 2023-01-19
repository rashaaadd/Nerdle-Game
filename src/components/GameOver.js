import React, { useContext } from 'react'
import { AppContext } from '../App'

function GameOver() {
    const {gameOver,currAttempt,correctEqn} = useContext(AppContext)
    return (
        <div className="gameOver">
            <h3>{gameOver.guessedEqn ? "You correctly guessed!!!" : "You failed!"}</h3>
            <h1>Correct: {correctEqn}</h1>
            {gameOver.guessedEqn && (<h3>You guessed in {currAttempt.attempt} attempts</h3>)}
        </div>
    )
}

export default GameOver
