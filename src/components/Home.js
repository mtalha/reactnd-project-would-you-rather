import React, { Component } from 'react'
import { connect } from 'react-redux'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import QuestionsList from './QuestionsList'


class Home extends Component {
    state = {
        selectedTab: 0,
    };

    handleTabChange = (e, value) => {
        this.setState({
            selectedTab: value
        })
    }

    render() {
        const { users, unansweredQIDs, answeredQIDs } = this.props
        const { selectedTab } = this.state

        if (Object.keys(users).length === 0 && users.constructor === Object) {
            return <p>Loading Data...</p>
        }

        return (
            <div>
                <Tabs value={selectedTab} onChange={this.handleTabChange}>
                    <Tab label='Unanswered Questions' />
                    <Tab label='Answered Questions' />
                </Tabs>
                {selectedTab === 0 && <QuestionsList questionsList={unansweredQIDs} />}
                {selectedTab === 1 && <QuestionsList questionsList={answeredQIDs} />}

            </div>
        )
    }
}

function mapStateToProps({ authedUser, questions, users }) {
    const answeredQIDs = Object.keys(questions)
        .filter((id) => users[authedUser].answers.hasOwnProperty(id))
        .sort((a, b) => questions[b].timestamp - questions[a].timestamp)

    const unansweredQIDs = Object.keys(questions)
        .filter((id) => !users[authedUser].answers.hasOwnProperty(id))
        .sort((a, b) => questions[b].timestamp - questions[a].timestamp)

    return {
        authedUser,
        users,
        unansweredQIDs,
        answeredQIDs
    }
}

export default connect(mapStateToProps)(Home)