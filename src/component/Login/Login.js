import React, { useState } from 'react';
import './Login.css';

export default function Login() {

    const [data, setColor] = useState({ color: '', border: '' })

    const changeColor = (e) => {
        e.preventDefault();
        setColor({ ...data, color: e.target.value });
    }
    const changeBorder = (e) => {
        e.preventDefault();
        setColor({ ...data, border: e.target.value + '%' });
    }

    const result = {
        width: '500px',
        height: '200px',
        margin: '40px',
        'text-align': 'center',
        'line-height': '100px',
        'border': '2px solid black'
    }

    return (
        <><div style={{ ...result, backgroundColor: data.color, borderRadius: data.border }}>
            {data.color}
            {data.border}
        </div>
            <input type='color' onChange={changeColor} />
            <input type='range' max='50' onChange={changeBorder} />

            <input list="browsers" name="browser" id="browser"/>
                <datalist id="browsers">
                    <option value="color"></option>
                    <option value="border"></option>
                    <option value="Chrome"></option>
                    <option value="Opera"></option>
                    <option value="Safari"></option>
                </datalist>

        </>

    )
}
