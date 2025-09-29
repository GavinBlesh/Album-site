import { useState } from 'react';
import './main.css';
export default

function Button(){
    const [text, setText] = useState("Get Groovy");
    const handleClick = () => {
        setText("Get Groovier");
    }
    return (
        <button
            className='button'
            onClick={handleClick}
           > {text}
        </button>
    )
}