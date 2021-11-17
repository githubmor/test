import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './component/Sidbar/layout'
import { BrowserRouter  } from 'react-router-dom'
import './index.css'


export default function MyApp() {

    // const [exchange, setExchange] = useState(data.at(0).exchangeName);

    // const change = function (event) {
    //     setExchange(event.target.value)
    // }
    
    return (
        <BrowserRouter>
    <Layout />
    </BrowserRouter>
    )

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