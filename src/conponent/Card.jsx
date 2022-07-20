import React from 'react'
import H2 from './H2';
import Input from './Input';
import Button from './Button';

function Card(props) {
    return (
        <div className="p-6 shadow space-y-4 ">
      {props.children}
        </div>
    )
}

export default Card;