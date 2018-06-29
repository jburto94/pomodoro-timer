import React from 'react';
import './LengthAdjusters.css';

const Break = props => {
  return (
    <div className='length-container'>
      <h3 className='length-title'>Break Length</h3>
      <button className='length-btn' onClick={props.incrementBreak}>+</button>
      <p className='length'>{props.length}</p>
      <button className='length-btn' onClick={props.decrementBreak}>-</button>
    </div>
  );
}

export default Break;