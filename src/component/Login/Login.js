import React,{useState} from 'react';
import './Login.css';

export default function Login() {

    const [data, setColor] = useState({color:'blue',border:''})

    const changeColor = (e)=>{
        e.preventDefault();
        setColor({...data,color : e.target.value});
    }
    const changeBorder = (e)=>{
        e.preventDefault();
        setColor({...data,border:e.target.value +'%'});
    }

    return (
        <><div className='result' style={{ backgroundColor: data.color , borderRadius:data.border }}>
            {data.color}
            {data.border}
        </div>
        <input type='color' onChange={changeColor}/>
        <input type='range' max='50' onChange={changeBorder}/>
        </>

    )
}
