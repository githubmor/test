import React from 'react'
import { Link } from 'react-router-dom'
import './Sidebar.css' 

export default function Sidebar() {
    const pages =[
        {name :'Home',route:''},
        {name :'About',route:"about"},
        {name:'Rule',route:"rule"},
        {name:'Exchange',route:"exchange"}
    ]
    return(   
            <>    
            {pages.map(page=>(
                <Link to={`/${page.route}`} >{page.name}</Link>

            ))}
            </>
    )
}