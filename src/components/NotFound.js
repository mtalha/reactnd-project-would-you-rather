import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = ({ location }) => (

    <div className="not-found">
        <h1>Oops!</h1>
        <h2>404 Not Found</h2>
        You entered an invalid URL {location.pathname}
        <div>
            <Link to='/'>Click here to go to Home Page</Link>
        </div>
    </div>
)

export default NotFound