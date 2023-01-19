import React,{useCallback, useEffect, useContext, disabledDigits} from 'react'
import {AppContext} from "../App"
import Key from './Key'

function Keypads() {
    const keys1 = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
    const keys2 = ["+", "-", "*", "/", "="]
    const {onDelete,onSelectDigit,onEnter,disabledDigits} = useContext(AppContext)
    const handleKeyboard = useCallback((event)=>{
        if(event.key === "Enter"){
            onEnter();
        }else if(event.key === "Backspace"){
            onDelete();
        }else{
            keys1.forEach((key)=>{
                if(event.key === key){
                    onSelectDigit(key)
                }
            });
            keys2.forEach((key)=>{
                if(event.key === key){
                    onSelectDigit(key)
                }
            })
        }
    })

    useEffect(()=>{
        document.addEventListener("keydown",handleKeyboard);

        return()=>{
            document.removeEventListener("keydown",handleKeyboard);
        }
    })
  return (
      <div className="keypad">
          <div className="line1">
              {keys1.map((key)=>{
                return <Key keyVal={key} disabled={disabledDigits.includes(key)}/>
              })}
          </div>
          <div className="line2">
            {keys2.map((key)=>{
                return <Key keyVal={key} disabled={disabledDigits.includes(key)}/>
            })}
            <Key keyVal={"Enter"} bigKey/>
            <Key keyVal={"Delete"} bigKey/> 
          </div>
      </div>
  )
}

export default Keypads
