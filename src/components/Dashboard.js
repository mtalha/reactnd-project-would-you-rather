import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import PollView from './PollView'
import LeaderBoard from './LeaderBoard'
import NavBar from './NavBar'
import Home from './Home'
import NewQuestion from './NewQuestion';
import NotFound from './NotFound'

class Dashboard extends Component {
    render() {
        return (
            <div className='container'>
                <NavBar />
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/questions/:id' component={PollView} />
                    <Route path='/add' component={NewQuestion} />
                    <Route path='/leaderboard' component={LeaderBoard} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        )
    }
}

export default Dashboard