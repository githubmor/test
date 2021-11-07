import React,{useState} from 'react'
import './InfoStep.css';


export default function InfoStep({ info,lastStep }) {

    const isLastStep = lastStep ? "block" :"none" ;
    
    return (
        <>
            <div className='info'>
                <div className='leftstep'>
                    <div className='circle'>
                        {info.step}
                    </div>
                    <div className='stepline' style={{display:isLastStep}} />
                </div>
                <div className='rightStep'>
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