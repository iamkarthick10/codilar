import React, { Component } from 'react'

export default class Timer extends Component {
    state = {
        count : 1000,
        stopCount : false
    }
    interval = null;
    handleTimer = () => {
        this.setState({count : this.state.count + 1});
        
    }
    startTimer = () => {
        setInterval(this.handleTimer, 1000);
    }
    handleStop = () => {
        this.setState({count:1000,stopCount:true})
    }
    render() {
        return (
            <div>
                <h1>{this.state.count}</h1> 
                <h2> {this.state.stopCount}</h2>
                <button onClick={this.handleTimer} >Start</button> 
                <button onClick={this.handleStop} > Stop </button>
                
            </div>
        )
    }
}
