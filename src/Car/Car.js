import React from "react";

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


export default (props) =>
    <div>
        <h2>Car name: {props.name}</h2>
        <strong>Year: {props.year}</strong>
        { props.children }
    </div>;