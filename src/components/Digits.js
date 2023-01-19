import React,{useContext, useEffect} from 'react'
import {AppContext} from "../App"


function Digits({digitPos,attemptVal,method}) {
  const {board, correctEqn,currAttempt, setDisabledDigits} = useContext(AppContext)
  const digit = board[attemptVal][digitPos]

  const right = correctEqn[digitPos] === digit
  const reorder = !right && digit !== '' && correctEqn.includes(digit) 

  
  const digitState = (currAttempt.attempt>attemptVal?
  (right? "right" : reorder? "reorder" : "wrong"): undefined);

  useEffect(()=> {
    if (digit !== '' && !right && !reorder){
      setDisabledDigits((prev)=>[...prev,digit]);
    }
  },[currAttempt.attempt]);
  return (
    <div className="digit" id={digitState}> 
        {digit} 
    </div>
  )
}

export default Digits
