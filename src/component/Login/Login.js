import React,{useState} from 'react';
import './Login.css';

export default function Login() {

    const [color, setColor] = useState("blue")

    const changeColor = (e)=>{
        e.preventDefault();
        setColor(e.target.value);
    }

    return (
        <><div className='result' style={{ backgroundColor: color }}>
            <h4>{color}</h4>
        </div>
        <input type='color' onChange={changeColor}/>
        
        </>

    )
}
