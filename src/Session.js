import React from 'react';

const Session = props => {
  return (
    <div>
      <h3 className='session-length'>Session Length</h3>
      <button onClick={props.incrementSession}>+</button>
      <p>{props.length}</p>
      <button onClick={props.decrementSession}>-</button>
    </div>
  );
}

export default Session;