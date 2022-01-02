import React, {Component} from 'react';

class Counter extends Component {

    state = {
        value: this.props.value,
        tags: ['tag1', 'tag2', 'tag3']
    };

    // constructor() {
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

    handleIncrement = (product) =>  {
        console.log(product);
        this.setState({ value: this.state.value + 1})
    };

    renderTags() {
        if (this.state.tags.length === 0) return <h2>There are no tags</h2>;
        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <h4>Counter #{this.props.id}</h4>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button
                    onClick={ () => this.handleIncrement() }
                    className="btn btn-secondary btn-sm">Increment
                </button>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 bg-";
        if (this.state.value === 0)
            classes += "warning"
        else classes += "primary";
        return classes;
    }

    formatCount() {
        const {value} = this.state;
        return value === 0 ? 'Zero' : value
    }
}

export default Counter;