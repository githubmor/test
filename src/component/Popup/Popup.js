import React, { useState } from 'react'
import InfoStep from './InfoStep'


export default function Popup({ exchange }) {



    return (
        <>
            <div className='container'>
                <h2>How To Connect Your {exchange.exchangeName} Account</h2>
                <div className='contect' >
                    {
                        exchange.info.map(
                            info => (
                                <InfoStep info={info}/>
                            )
                        )
                    }
                </div>
            </div>
        </>
    )

}