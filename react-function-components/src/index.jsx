import React from 'react';
import ReactDOM from 'react-dom/client';

function CustomButton(props) {
  return <button>{props.name}</button>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
const element = <CustomButton name="Click Me!" />;
root.render(element);

// Alternative solution
// function CustomButton() {
//   return (
//     <button>Click Me!</button>
//   )
// }
// const container = document.querySelector('#root');
// const root = ReactDOM.createRoot(container)
// root.rener(<CustomButton />)
