import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom'

import Popup from './component/Popup/Popup';
import data from './exchangeData';
import  Login  from "./component/Login/Login";
import SideBar from './component/SideBar/Sidebar'
import SidbarApp from './component/SideBar/SidbarApp'
import './index.css';

export default function MyApp() {

    // const [exchange, setExchange] = useState(data.at(0).exchangeName);

    // const change = function (event) {
    //     setExchange(event.target.value)
    // }
    
    return  <SidbarApp />
  //<Login />

    // return (
    //     <>
    //         <select onChange={change} value={exchange}>
    //             {data.map(
    //                 ex => (
    //                     <option value={ex.exchangeName}>{ex.exchangeName}</option>
    //                 )
    //             )}
    //         </select>
    //         <Popup exchange={ 
    //             data.find((iu)=>{return iu.exchangeName===exchange})
    //         } />
            
    //     </>
    // )

}

ReactDOM.render(<MyApp />, document.getElementById('root'));