import React, {Component} from 'react';
import NavBar from './components/navbar';
import './App.css';
import Counters from "./components/counters";

class App extends Component {

    state = {
        counters: [
            {id: 1, value: 4},
            {id: 2, value: 0},
            {id: 3, value: 5},
            {id: 4, value: 0},
            {id: 5, value: 0},
        ]
    }

    handleIncrement = (counter) => {
        const newCounters = [...this.state.counters];
        const index = newCounters.indexOf(counter);
        newCounters[index] = {...counter};
        newCounters[index].value++;
        this.setState({counters: newCounters});

    };

    handleReset = () => {
        const newCounters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        });

        this.setState({counters: newCounters});
    }

    handleDelete = (id) => {
        const newCounters = this.state.counters.filter(c => c.id != id)
        this.setState({counters: newCounters});
    }

    render() {
        return (
            <React.Fragment>
                <NavBar totalCounters={this.state.counters.filter(c=> c.value > 0).length}/>
                <div className="container">
                    <Counters onReset={this.handleReset}
                              onIncrement={this.handleIncrement}
                              onDelete={this.handleDelete}
                              counters = {this.state.counters}
                    />
                </div>
            </React.Fragment>

        );
    }

}

export default App;
