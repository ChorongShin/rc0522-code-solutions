import React from 'react';
import ReactDOM from 'react-dom';

function CustomButton(props) {
  return <button>{props.name}</button>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
const element = <CustomButton name="Click Me!" />;
root.render(element);
