import React from "react";
import './Car.css';
import Radium from "radium";

// function car() {
//     return (
//         <h2>This text</h2>
//     )
// }

// const car = () => {
//     return (
//         <h2>This text</h2>
//     )
// };

// const car = () =>
//     <div>
//         <h2>This text</h2>
//     </div>;

const Car  = (props) => {
    const inputClasses = ['input'];

    if (props.name !== '') {
        inputClasses.push('green');
    } else {
        inputClasses.push('red');
    }

    if (props.name.length > 4) {
        inputClasses.push('bold');
    }

    const style = {
        boxShadow: '0 0 5px blue',
        transition: '.3s',
        cursor: 'pointer',
        ':hover': {
            boxShadow: '0 0 5px red'
        }
    };

    return (
        <div className='Car' style={style}>
            <h2>Car name: {props.name}</h2>
            <strong style={{display: 'block'}}>Year: {props.year}</strong>
            <input
                type="text"
                onChange={props.onChangeName}
                className={inputClasses.join(' ')}
                value={props.name}/>
            <div>
                <button onClick={props.onDelete}>Delete</button>
            </div>
        </div>
    );
};

export default Radium(Car);
