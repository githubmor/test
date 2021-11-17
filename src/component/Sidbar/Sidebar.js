import React from 'react'
import './Sidebar.css' 

export default function Sidebar() {
    const items =[
        {name :'home'},
        {name :'about'},
        {name:'rule'},
        {name:'exchange'}
    ]
    return(
        <div className="container">
            
            {items.map(iy=>(
                <div className='sidebarItem'>
                {iy.name}
                </div>
            ))}
        </div>
    )
}