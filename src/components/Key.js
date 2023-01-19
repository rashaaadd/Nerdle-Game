import React,{useContext} from 'react'
import {AppContext} from "../App"

function Key({keyVal,bigKey,disabled}) {
    const {onSelectDigit,onDelete,onEnter} = useContext(AppContext)
    const selectDigit = ()=>{
        if(keyVal === "Enter"){
            onEnter();
        }else if(keyVal === 'Delete'){
            onDelete();
        }else{
            onSelectDigit(keyVal);
        }
            

    }
  return (
      <div className="key" id={bigKey? "big": disabled && "disabled"} onClick={selectDigit}>{keyVal}</div>
  )
}

export default Key
