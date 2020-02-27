import React, {Component} from 'react';
import Car from "./Car/Car";
// import './App.css';
import classes from './App.module.scss';

console.log(classes);

class App extends Component {
    state = {
        cars: [
            {name: 'Ford', year: 2020},
            {name: 'Audi', year: 1989},
            {name: 'BMW', year: 2011}
        ],
        pageTitle: 'Hello, motherfucker!',
        showCars: false
    };

    onChangeName = (name, i) => {
        const car = this.state.cars[i];
        car.name = name;
        const cars = [...this.state.cars];
        cars[i] = car;
        this.setState(cars);
    };

    toggleCarsHandler = () => {
        this.setState({showCars: !this.state.showCars});
    };

    deleteHandler(i) {
        const cars = this.state.cars.concat();
        cars.splice(i,1);

        this.setState({cars})
    }

    render() {
        let cars = null;

        if (this.state.showCars) {
            cars = this.state.cars.map((car, i) => {
                return (
                    <Car
                        name={car.name}
                        year={car.year}
                        key={i}
                        onDelete={this.deleteHandler.bind(this, i)}
                        onChangeName={event => this.onChangeName(event.target.value, i)}
                    />
                )
            })
        }

        return (
            <div className='wrapper'>
                <h1>{this.state.pageTitle}</h1>

                <button onClick={this.toggleCarsHandler} style={classes.big}>Show/Hide Cars</button>
                <div style={{
                    maxWidth: 400,
                    margin: 'auto',
                    paddingTop: '20px'
                }}>
                    {cars}
                </div>
            </div>
        );
    }
}

export default App;
