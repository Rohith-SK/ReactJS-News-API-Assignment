import React from 'react'
import { Link } from 'react-router-dom'
import Hoc from '../../HOC/Hoc'
import './Works.css'

function Works() {
    return (
        <div>
            <h1 className="works">Works</h1>
            <h1 className="works-details">ReactJS</h1>
            <Link to='/newsinfo'>
                <button className='nav-go-back-button'>Go Back</button>
            </Link>
        </div>
    )
}

export default Hoc(Works)
