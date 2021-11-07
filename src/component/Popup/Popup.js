import React, { useState } from 'react';
import './Popup.css';
import InfoStep from './InfoStep';


export default function Popup({ exchange }) {



    return (
        <>
        <div className='arrow'/>
            <div className='container'>
                <h3>How To Connect Your {exchange.exchangeName} Account</h3>
                <div  >
                    {
                        exchange.info.map(
                            (dt, i,arr) => (
                                    <InfoStep info={dt} lastStep={i<arr.length-1} />
                            )

                        )
                    }
                </div>
            </div>
        </>
    )

}