import React from 'react'
import { Link } from 'react-router-dom'
import Hoc from '../../HOC/Hoc'
import './About.css'

function About() {
    return (
        <div>
            <h1 className="head">The Website is created for the sole purpose of Learning. ReactJS and and other things are learned through this webiste by implementation.</h1>
            <p className='paragraph'>React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications. However, React is only concerned with state management and rendering that state to the DOM, so creating React applications usually requires the use of additional libraries for routing, as well as certain client-side functionality.</p>
            <Link to='/newsinfo'>
                <button className='nav-go-back-button'>Go Back</button>
            </Link>
        </div>
    )
}

export default Hoc(About)
