import React from 'react';
import './Break.css';

const Break = props => {
  return (
    <div>
      <h3 className='break-length'>Break Length</h3>
      <button onClick={props.incrementBreak}>+</button>
      <p>{props.length}</p>
      <button onClick={props.decrementBreak}>-</button>
    </div>
  );
}

export default Break;