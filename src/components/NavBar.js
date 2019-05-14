import React from 'react'
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { logoutUser } from '../actions/authedUser'
import Button from '@material-ui/core/Button'


function NavBar(props) {
    const { user, dispatch } = props
    const onLogout = (e) => {
        dispatch(logoutUser());
    }
    return (
        <div className='nav-bar'>
            <div>
                <nav className='nav'>
                    <ul>
                        <li>
                            <NavLink to='/' exact activeClassName='active'>
                                Home
                   </NavLink>
                        </li>
                        <li>
                            <NavLink to='/add' exact activeClassName='active'>
                                New Question
                   </NavLink>
                        </li>
                        <li>
                            <NavLink to='/leaderboard' activeClassName='active'>
                                Leader Board
                    </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className='center'>
                <img
                    src={user.avatarURL}
                    alt={`Avatar of ${user.name}`}
                    className='profile'
                />
                <div>{user.name}</div>
            </div>
            <div>
                <Button size='small' onClick={onLogout}>Logout</Button>
            </div>
        </div>
    )
}

function mapStateToProps({ users, authedUser }) {
    return {
        user: users[authedUser]
    }
}
export default connect(mapStateToProps)(NavBar)