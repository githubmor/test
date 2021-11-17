import React from 'react'
import Routess from './../../routes'
import Sidebar from './Sidebar'

export default function Layout(props) {
    return(
    <div>
        <Sidebar />
        <Routess />
    </div>
    )
}