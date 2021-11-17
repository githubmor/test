import React from 'react'
import Routess from './../../routes'
import Sidebar from './Sidebar'
import './layout.css'

export default function Layout() {
    return(
    <div className="container">
        <div className="sidebar">
        <Sidebar />
        </div>
        <div className="content">
        <Routess />
        </div>
    </div>
    )
}