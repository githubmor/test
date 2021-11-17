import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './component/Sidbar/layout'

export default function MyApp() {

    // const [exchange, setExchange] = useState(data.at(0).exchangeName);

    // const change = function (event) {
    //     setExchange(event.target.value)
    // }
    
    return <Layout />

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