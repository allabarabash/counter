import React, {Component} from 'react';

class Counter extends Component {

    // constructor() {
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

    // handleIncrement = (product) =>  {
    //     console.log(product);
    //     this.setState({ value: this.state.value + 1})
    // };
    //
    // renderTags() {
    //     if (this.state.tags.length === 0) return <h2>There are no tags</h2>;
    //     return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
    // }


    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.counter.value !== this.props.counter.value) {
            // Ajax call and get new data from the server
        }
    }

    componentWillUnmount() {
        console.log('Counter - Umnount');
    }

    render() {

        console.log('Counter - Rendered');
        const {counter, onDelete, onIncrement} = this.props;

        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button
                    onClick={ () => onIncrement(counter) }
                    className="btn btn-secondary btn-sm">Increment
                </button>
                <button
                    onClick={() => onDelete(counter.id) }
                    className="btn btn-danger btn-sm m-2">Delete</button>
            </div>
        );
    }

    getBadgeClasses =() => {
        let classes = "badge m-2 bg-";
        if (this.props.counter.value === 0)
            classes += "warning"
        else classes += "primary";
        return classes;
    }

    formatCount = () => {
        const {value} = this.props.counter;
        return value === 0 ? 'Zero' : value
    }
}

export default Counter;