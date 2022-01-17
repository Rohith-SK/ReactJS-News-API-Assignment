import React from 'react'
import { Link } from 'react-router-dom'
import Hoc from '../../HOC/Hoc'
import './Team.css'

function Team() {
    return (
        <div>
            <h1 className='team-members'>Team Members</h1>
            <ul>
                <li className='team-members-list'>Abdul Mujeeb M A</li>
                <li className='team-members-list'>Rohith S K</li>
            </ul>
            <Link to='/newsinfo'>
                <button className='nav-go-back-button'>Go Back</button>
            </Link>
        </div>
    )
}

export default Hoc(Team)
