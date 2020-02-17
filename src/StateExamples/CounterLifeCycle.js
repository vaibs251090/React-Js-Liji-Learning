import React,{Component} from 'react';

class CounterLifecycle extends Component {
    constructor(props) {
        console.log('constructor called')
        super(props);
        this.state = { 
            count: 0
        };
        this.Increment = this.Increment.bind(this);
        this.Decrement = this.Decrement.bind(this);
    }
    componentWillMount(){
        console.log('componentWillMount called')
    }
    componentDidMount() {
        console.log('componentDidMount called')
    }

    Increment(){
        this.setState({count: this.state.count + 1})
    }
    Decrement(){
        this.setState({count: this.state.count - 1})
    }
    componentWillReceiveProps(){
        console.log('componentWillReceiveProps called')
    }
    shouldComponentUpdate(){
        console.log('shouldComponentUpdate called');
        return true
    }
    componentWillUpdate(){
        console.log('componentWillUpdate called')
    }
    componentDidUpdate(){
        console.log('componentDidUpdate called');
    }
    render() {
        console.log('render called');
        return (
            <div>
                <div>
                    <h1>{this.state.count}</h1>
                </div>
                <button onClick={this.Increment}>
                    <span>+(Add)</span>
                </button>
                <button onClick={this.Decrement}>
                    <span>-(Remove)</span>
                </button>
            </div>
        );
    }
}

export default CounterLifecycle;