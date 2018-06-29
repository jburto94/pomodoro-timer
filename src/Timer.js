import React from 'react';
import './Timer.css';

const Timer = props => {
  let count = document.querySelector('h4');
  if(props[props.type].min < 1) {
    count.style = 'color: #cd2626';
  }

  if(props[props.type].sec < 10) {
    return(
      <div className='timer'>
        <h3 className='type'>{props.type}</h3>
        <h4 className='countdown'>
          {props[props.type].min}<span>min</span>
           0{props[props.type].sec}<span>sec</span>
        </h4>
        <button className='screen-btn' onClick={props.handlePlay}>Play || Pause</button>
      </div>
    );
  } else {
    return(
      <div className='timer'>
        <h3 className='type'>{props.type}</h3>
        <h4 className='countdown'>
          {props[props.type].min}<span>min</span>
          {props[props.type].sec}<span>sec</span>
        </h4>
        <button className='screen-btn' onClick={props.handlePlay}>Play || Pause</button>
      </div>
    );
  }
}

export default Timer;