import React from 'react';
import Car from "./Car/Car";
import './App.css';

function App() {
    return (
        <div className='wrapper'>
            <h1>Hello, motherfucker!</h1>
            <Car name={'Ford'} year={2020}>
                <p style={{color: 'red', textTransform: 'uppercase'}}>color</p>
            </Car>
            <Car name={'Audi'} year={1989}>
                <p style={{color: 'green', textTransform: 'uppercase'}}>color</p>
            </Car>
        </div>
    );
}

export default App;
