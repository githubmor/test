import React from 'react'


export default function InfoStep({ info }) {

    return (
        <>
            <div className='info'>
                <div className='leftstep'>
                    <div className='circle'>
                        {info.step}
                    </div>
                    <div className='stepline' />
                </div>
                <div className='description'>
                    <h4>{info.title}</h4>
                    <div className='content'>
                        <div className='img' />
                        <div className='descinfo'>
                            <p >{info.description}</p>
                            <h6>{info.key}</h6>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}