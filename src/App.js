import React, {Component} from 'react'

class Counter extends Component {
    constructor() {
        super()
        this.state = {
            count: 0,
        }
    }

    render() {
        return (
            <div className="container">
                <div className="navbar">Counter.js</div>
                <div className="counter">
                    <h1>{this.state.count}</h1>
                    <button type="button" onClick={this.increment}>Increment</button>
                    <button type="button" onClick={this.decrement}>Decrement</button>
                    <button type="button" onClick={this.reset}>Clear</button>
                </div>
            </div>
        )
    }

    increment = () => {
        this.setState({count: this.state.count + 1})
    }

    decrement = () => {
        if (this.state.count > 0) {
            this.setState({count: this.state.count - 1})
        }
    }

    reset = () => {
        this.setState({count: 0})
    }
}

export default Counter

