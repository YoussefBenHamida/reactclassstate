import React from 'react';


class Timer extends React.Component{

    constructor(){
        super()
        this.state = {
            timer : 0
        }
    }

    componentDidMount(){
        setInterval(() => {
          this.setState({ timer: this.state.timer + 1 }); 
        }, 1000);
      }
      render(){
        return (
        <p>{this.state.timer}</p>
    )
} 
} 

export default Timer