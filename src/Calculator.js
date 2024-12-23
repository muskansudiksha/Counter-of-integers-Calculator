import React from 'react';
import  ReactDOM  from 'react-dom/client';

class Calculator extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count:0,
        }
        this.incrementCount = this.incrementCount.bind(this);
        this.decrementCount = this.decrementCount.bind(this);
    }
    incrementCount = ()=>{
        this.setState((prevState)=>{ return {count : prevState.count + this.props.number}});
    }
    decrementCount = ()=>{
        this.setState((prevState)=>{ return {count : prevState.count - this.props.number}});
    }
    render(){
        return(
            <div>
                <button type='click' onClick = {this.decrementCount}>-{this.props.number}</button>
                <p>{this.state.count}</p>
                <button type='click' onClick = {this.incrementCount}>+{this.props.number}</button>
            </div>
    )}
}

export default Calculator;