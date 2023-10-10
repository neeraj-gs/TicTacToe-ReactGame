import React, { useEffect, useState } from 'react'
import Square from './Square'


const Board = () => {

  const [state,setState] = useState(Array(9).fill(null))
  const [isXturn,SetIsXturn] = useState(true);
  const [isDraw,SetisDraw] = useState(false);

  const handleCLick=(index)=>{
    //FO rcurrent PLayer
    if(state[index]!=null){
      return;
    }
    const oldstate = [...state];
    oldstate[index] = isXturn? "X":"O";
    setState(oldstate);
    SetIsXturn(!isXturn)
  }

  const CheckWinner = ()=>{
    const winnerLogic = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6],
    ];
    for(let i of winnerLogic){
      const [a,b,c] = i;
      if(state[a]!==null &&  state[a]===state[b] && state[a]===state[c]){
        return state[a];
      }
    }
    return false;
  }
  const isWinner = CheckWinner();

  const handleReset = ()=>{
    setState(Array(9).fill(null))
  }

  useEffect(()=>{
    const winner = CheckWinner();
    if(winner){
      SetisDraw(false)
    }else if(state.every((s)=>s!==null)){
      SetisDraw(true)
    }
  },[state])


  return (
    <div className='board-container'>
      {isWinner? (
      <>
      {isWinner} Won the Game <button onClick={handleReset}>Play Again</button>
      </> ):(

      <>
        <h5>Player {isXturn? "X":"O"} It's Your Turn</h5>
          <div className='board-row'>
            <Square onClick={()=>handleCLick(0)} value={state[0]} />
            <Square onClick={()=>handleCLick(1)} value={state[1]}/>
            <Square onClick={()=>handleCLick(2)} value={state[2]}/>
          </div>
          <div className='board-row'>
            <Square onClick={()=>handleCLick(3)} value={state[3]}/>
            <Square onClick={()=>handleCLick(4)} value={state[4]}/>
            <Square onClick={()=>handleCLick(5)} value={state[5]}/>
          </div>
          <div className='board-row'>
            <Square onClick={()=>handleCLick(6)} value={state[6]}/>
            <Square onClick={()=>handleCLick(7)} value={state[7]}/>
            <Square onClick={()=>handleCLick(8)} value={state[8]}/>
          </div>
      </>
      )}
    </div>
  )
}

export default Board

//Added all Fucntoinalities