import React from 'react';
import './LengthAdjusters.css';

const Session = props => {
  return (
    <div className='length-container'>
      <h3 className='length-title'>Session Length</h3>
      <button className='length-btn' onClick={props.incrementSession}>+</button>
      <p className='length'>{props.length}</p>
      <button className='length-btn' onClick={props.decrementSession}>-</button>
    </div>
  );
}

export default Session;