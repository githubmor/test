import React, { useState } from 'react'
import data from './data';
import './App.css';
import ExChangeCard from '../Exchanges/ExchangeCard'

function App() {
  const [exchange, setExchange] = useState("Binance");

  const change = function (event) {
    setExchange(event.target.value)
  }

  return (
    <div className='App'>
      <h1>Exchanges</h1>
      <div className='container'>
      <div className='form-exchange'>
        <h2 >Connect New Exchange</h2>
        <h4>Choose among the top crypto currency exchanges</h4>
        <select onChange={change} value={exchange}>
          {
            data.map(
              ex => (

                <option value={ex.exchangeName}>{ex.exchangeName}</option>
              )
            )
          }
        </select>
        <ExChangeCard
          Keys={
            data.find(el => {
              return el.exchangeName === exchange
            }).keys
          } />
      </div>
      <div className='connection'>
        <h2>Connected Exchanges</h2>
        <h4>You haven't connected any exchange yet.</h4>
      </div>
      </div>
    </div>
  )
}

export default App;
