import React from 'react'
import NavigationBar from '../Navbar/NavigationBar'


 const Hoc=(Component)=>()=>{
    return (
        <div>
            <NavigationBar />
            <Component/>
        </div>
    )
}

export default Hoc

