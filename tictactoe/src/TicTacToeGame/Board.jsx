import React, { useState } from 'react'
import Square from './Square'


const Board = () => {

  const [state,setState] = useState(Array(9).fill(null))
  const [isXturn,SetIsXturn] = useState(true);

  const handleCLick=(index)=>{
    //FO rcurrent PLayer
    const oldstate = [...state];
    oldstate[index] = isXturn? "X":"O";
    setState(oldstate);
    SetIsXturn(!isXturn)
  }


  return (
    <div className='board-container'>
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
    </div>
  )
}

export default Board