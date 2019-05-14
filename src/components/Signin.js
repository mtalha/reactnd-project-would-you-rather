import React, { Component } from 'react'
import { connect } from 'react-redux'
import logo from '../logo.svg'
import { Redirect } from 'react-router-dom'
import { setAuthedUser } from '../actions/authedUser'

class Signin extends Component {

    state = {
        selectedValue: 'Select User',
        toHome: false
    }

    handleSelectedValue = (e) => {
        this.setState({
            selectedValue: e.target.value
        })
    }

    handleFormSubmit = (e) => {
        e.preventDefault()

        const { dispatch } = this.props
        dispatch(setAuthedUser(this.state.selectedValue))

        this.setState({
            toHome: true
        })
    }

    render() {
        const { toHome } = this.state
        const { users } = this.props
        if (Object.keys(users).length === 0 && users.constructor === Object) {
            return <p>Loading Data...</p>
        }

        if (toHome === true) {
            return <Redirect to='/home' />
        }

        return (
            <div className='signin-container'>
                <div className='signin-header'>
                    <div><h2>Welcome to the Would You Rather App!</h2></div>
                    <div>Please sign in to continue</div>
                </div>
                <div className='grey-line'></div>
                <img src={logo} className='logo' alt='logo' />
                <div><h1>Sign in</h1></div>
                <form onSubmit={this.handleFormSubmit}>
                    <div className='users-select'>
                        <select
                            value={this.state.selectedValue}
                            onChange={this.handleSelectedValue}
                            id="userSignin"
                        >
                            <option value='signedOut'>Select User</option>
                            {
                                Object.keys(users).map((id) => (
                                    <option value={id} key={id}>{users[id].name}</option>
                                ))
                            }
                        </select>
                    </div>
                    <button
                        type="submit"
                        className="btn btn-select-user"
                        disabled={this.state.selectedValue === 'Select User'}>
                        Sign In
                    </button>
                </form>
            </div>
        )
    }
}

function mapStateToProps({ authedUser, users }) {
    return {
        authedUser,
        users
    }
}

export default connect(mapStateToProps)(Signin)