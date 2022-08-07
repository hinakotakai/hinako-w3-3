import React from 'react';
import { useState } from 'react';  


const Button = () => {
    const [count, setCount] = useState(0);
    const onClick = () => {
        setCount(count + 1);
    };

    return (
        <div>
        <button className='border border-gray-300 hover:border-pink-700 m-4 p-2 rounded-xl' onClick= {onClick}>LIKE❤ {count}</button>
        </div>
    )
}

export default Button;

