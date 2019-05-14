import React, { Component, Fragment } from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import { handleInitialData } from '../actions/shared'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'
import Dashboard from './Dashboard'
import Signin from './Signin'


class App extends Component {

    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }
    
    render() {
        return (
            <Router>
                <Fragment>
                    <LoadingBar />
                    <div className='container'>
                        {!this.props.authedUser
                            ? <Signin />
                            : <Dashboard />}
                    </div>
                </Fragment>
            </Router>
        )
    }
}

function mapStateToProps({ authedUser }) {
    return {
        authedUser,
        loading: authedUser === null
    }
}

export default connect(mapStateToProps)(App)