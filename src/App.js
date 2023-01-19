import './App.css';
import Board from './components/Board';
import Keypads from './components/Keypads';
import { createContext,useState } from 'react';
import { boardDefault} from './Equations'
import GameOver from './components/GameOver';

export const AppContext = createContext();

function App() {
  const [board, setBoard] = useState(boardDefault);
  const [currAttempt, setCurrAttempt] = useState({attempt: 0,digitPos:0});
  const [disabledDigits,setDisabledDigits] = useState([]);
  const [gameOver,setGameOVer] = useState({
    gameOver : false,
    guessedEqn : false,
  });

  const correctEqn = "30-20=10"
  const counts = {};

  const onSelectDigit = (keyVal) => {
    if(currAttempt.digitPos > 7) return;
            const newBoard = [...board]
            newBoard[currAttempt.attempt][currAttempt.digitPos] = keyVal
            setBoard(newBoard)
            setCurrAttempt({...currAttempt,digitPos: currAttempt.digitPos + 1})
  }
  const onDelete = () => {
    if(currAttempt.digitPos === 0)return;
            const newBoard = [...board];
            newBoard[currAttempt.attempt][currAttempt.digitPos - 1] = ""
            setBoard(newBoard)
            setCurrAttempt({...currAttempt, digitPos : currAttempt.digitPos -1})
  }
  const onEnter = () => {
    if(currAttempt.digitPos !== 8)return;

    let currEqn = ''
    for (let i=0;i<8;i++){
      currEqn += board[currAttempt.attempt][i];
    }

    const arr = currEqn.split("=")
    if(arr.length !== 2){
      alert("Enter Valid Equation")
      return;
    }
    if (eval(arr[0]) || eval(arr[1]))
    if(eval(arr[0]) !== eval(arr[1])){
      alert("Enter Valid Equation")
      return
    }else{
      setCurrAttempt({attempt:currAttempt.attempt + 1, digitPos : 0 })
    };
    if(currEqn === correctEqn){
      setGameOVer({gameOver:true,guessedEqn:true});
    }
    if(currAttempt.attempt > 4){
      setGameOVer({gameOver: true,guessedEqn:false});
    }
  }

  return (
    <div className="App">
      <nav>
        <h1>nerdle.</h1>
      </nav>
      <AppContext.Provider
       value={{
        board,
        setBoard,
        currAttempt,
        setCurrAttempt,
        onSelectDigit,
        onDelete,
        onEnter,
        correctEqn,
        disabledDigits,
        setDisabledDigits,
        gameOver,
        setGameOVer,
        }}>
        <div className="game">
          <Board/>
          {gameOver.gameOver? <GameOver/> : <Keypads/>}
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
