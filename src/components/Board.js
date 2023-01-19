import Digits from './Digits'

function Board() {
  return (
    <div className="board">
        <div className="row">
            <Digits digitPos={0} attemptVal={0}/>
            <Digits digitPos={1} attemptVal={0}/>
            <Digits digitPos={2} attemptVal={0}/>
            <Digits digitPos={3} attemptVal={0}/>
            <Digits digitPos={4} attemptVal={0}/>
            <Digits digitPos={5} attemptVal={0}/>
            <Digits digitPos={6} attemptVal={0}/>
            <Digits digitPos={7} attemptVal={0}/>
        </div>
        <div className="row">
            <Digits digitPos={0} attemptVal={1}/>
            <Digits digitPos={1} attemptVal={1}/>
            <Digits digitPos={2} attemptVal={1}/>
            <Digits digitPos={3} attemptVal={1}/>
            <Digits digitPos={4} attemptVal={1}/>
            <Digits digitPos={5} attemptVal={1}/>
            <Digits digitPos={6} attemptVal={1}/>
            <Digits digitPos={7} attemptVal={1}/>
        </div>
        <div className="row">
            <Digits digitPos={0} attemptVal={2}/>
            <Digits digitPos={1} attemptVal={2}/>
            <Digits digitPos={2} attemptVal={2}/>
            <Digits digitPos={3} attemptVal={2}/>
            <Digits digitPos={4} attemptVal={2}/>
            <Digits digitPos={5} attemptVal={2}/>
            <Digits digitPos={6} attemptVal={2}/>
            <Digits digitPos={7} attemptVal={2}/>
        </div>
        <div className="row">
            <Digits digitPos={0} attemptVal={3}/>
            <Digits digitPos={1} attemptVal={3}/>
            <Digits digitPos={2} attemptVal={3}/>
            <Digits digitPos={3} attemptVal={3}/>
            <Digits digitPos={4} attemptVal={3}/>
            <Digits digitPos={5} attemptVal={3}/>
            <Digits digitPos={6} attemptVal={3}/>
            <Digits digitPos={7} attemptVal={3}/>
        </div>
        <div className="row">
            <Digits digitPos={0} attemptVal={4}/>
            <Digits digitPos={1} attemptVal={4}/>
            <Digits digitPos={2} attemptVal={4}/>
            <Digits digitPos={3} attemptVal={4}/>
            <Digits digitPos={4} attemptVal={4}/>
            <Digits digitPos={5} attemptVal={4}/>
            <Digits digitPos={6} attemptVal={4}/>
            <Digits digitPos={7} attemptVal={4}/>
        </div>
        <div className="row">
            <Digits digitPos={0} attemptVal={5}/>
            <Digits digitPos={1} attemptVal={5}/>
            <Digits digitPos={2} attemptVal={5}/>
            <Digits digitPos={3} attemptVal={5}/>
            <Digits digitPos={4} attemptVal={5}/>
            <Digits digitPos={5} attemptVal={5}/>
            <Digits digitPos={6} attemptVal={5}/>
            <Digits digitPos={7} attemptVal={5}/>
        </div>
    </div>
  )
}

export default Board
