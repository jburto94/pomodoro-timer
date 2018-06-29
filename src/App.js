import React, { Component } from 'react';
import Timer from './Timer';
import Break from './Break';
import Session from './Session';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { 
      session: {
        sec: 0,
        min: 25,
        incrementMin: 25
      },
      break: {
        sec: 0,
        min: 5,
        incrementMin: 5
      },
      type: 'session',
      play: false
    };
    this.breakIncrementor = this.breakIncrementor.bind(this);
    this.breakDecrementor = this.breakDecrementor.bind(this);
    this.sessionIncrementor = this.sessionIncrementor.bind(this);
    this.sessionDecrementor = this.sessionDecrementor.bind(this);
    this.countdown = this.countdown.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleSwitch = this.handleSwitch.bind(this);
  }

  breakIncrementor() {
    let incrementBreak = this.state.break.incrementMin;
    if(this.state.play && this.state.break.min < 99) {
      incrementBreak++;
      this.setState({
        break: {
          min: incrementBreak,
          sec: 0,
          incrementMin: incrementBreak
        }
      });
    }
  }

  breakDecrementor() {
    let decrementBreak = this.state.break.incrementMin;
    if(this.state.play && this.state.break.min > 1) {
      decrementBreak--;
      this.setState({
        break: {
          min: decrementBreak,
          sec: 0,
          incrementMin: decrementBreak
        }
      });
    }
  }

  sessionIncrementor() {
    let incrementSession = this.state.session.incrementMin;
    if(this.state.play && this.state.session.min < 99) {
      incrementSession++;
      this.setState({
        session: {
          min: incrementSession,
          sec: 0,
          incrementMin: incrementSession
        }
      });
    }
  }

  sessionDecrementor() {
    let decrementSession = this.state.session.incrementMin;
    if(this.state.play && this.state.session.min > 1) {
      decrementSession--;
      this.setState({
        session: {
          min: decrementSession,
          sec: 0,
          incrementMin: decrementSession
        }
      });
    }
  }

  handlePlay() {
    this.setState({
      play: !this.state.play
    });
    if(this.state.play) {
      this.countdown();
    } else {
      clearInterval(this.timer);
    }
  }

  countdown() {
    let min = this.state[this.state.type].min;
    let sec = this.state[this.state.type].sec;
    let incrementMin = this.state[this.state.type].incrementMin;
    this.timer = setInterval(() => {
      if(min > 0 && sec === 0) {
        min--;
        sec = 59;
        this.setState({
          [this.state.type]: {
            min,
            sec,
            incrementMin
          }
        });
      } else if(sec > 0 && sec <= 59) {
        sec--;
        this.setState({
          [this.state.type]: {
            min,
            sec,
            incrementMin
          }
        });
      } else {
        this.handleSwitch();
      }
    }, 1000);
  }

  handleReset() {
    if(this.state.play) {
      this.setState({
        session: {
          sec: 0,
          min: 25,
          incrementMin: 25
        },
        break: {
          sec: 0,
          min: 5,
          incrementMin: 5
        },
        type: 'session'
      });
    } else {
      return;
    }
  }

  handleSwitch() {
    if(this.state.session.min === 0 && this.state.session.sec === 0) {
      this.setState({
        type: 'break',
        session: {
          min: this.state.session.incrementMin,
          sec: 0,
          incrementMin: this.state.session.incrementMin
        },
        play: false
      });
      this.handlePlay();
    } else if(this.state.break.min === 0 && this.state.break.sec === 0) {
      this.setState({
        type: 'session',
        break: {
          min: this.state.break.incrementMin,
          sec: 0,
          incrementMin: this.state.break.incrementMin,
        },
        play: false
      });
      this.handlePlay();
    }
  }

  componentDidMount() {
    this.handlePlay();
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div className='app'>
        <div id='incrementors'>
          <Break 
            length={this.state.break.incrementMin}
            incrementBreak={this.breakIncrementor}
            decrementBreak={this.breakDecrementor}
          />
          <Session 
            length={this.state.session.incrementMin}
            incrementSession={this.sessionIncrementor}
            decrementSession={this.sessionDecrementor}
          />
        </div>
        <Timer 
          session={this.state.session} 
          break={this.state.break}
          type={this.state.type}
          play={this.state.play}
          handlePlay={this.handlePlay}
          handleReset={this.handleReset}
        />
      </div>
    )
  }
}

export default App;
