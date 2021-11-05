import React from 'react'
import './Card.css'
import PropTypes from 'prop-types'


export default function Card({children}){
    return (
        <div className='Card'>
                {children}
        </div>
    )
}

Card.prototype={
    children:PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.element),
        PropTypes.element.isRequired
    ])
}