import React, { Component } from 'react'
import { connect } from 'react-redux'

class Leader extends Component {


    render() {

        const {
            user,
        } = this.props

        const score = Object.keys(user.answers).length + user.questions.length

        return (
            <div>
                <div className='question'>
                    <img
                        src={user.avatarURL}
                        alt={`Avatar of ${user.name}`}
                        className='avatar'
                    />
                    <div className='poll-view-box'></div>
                    <div className='question-info'>
                        <div>
                            <div ><h2>{user.name}</h2></div>
                            <div>
                                <div className='leader-stats'>
                                    <span className='leader-stats-label'>Answered Questions </span> 
                                    <span className='leader-stats-score'>{Object.keys(user.answers).length}</span>
                                </div>
                                <div className='leader-stats'>
                                    <span className='leader-stats-label'>Created Questions</span> 
                                    <span className='leader-stats-score'>{user.questions.length}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='poll-view-box'></div>
                    <div className='score-div'>
                        <div className='center-content table table-border'>
                            <div className='question-box table-row'><h3>Score</h3></div>
                            <div className='total-score'>
                                <div className='badge-green'>{score}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ authedUser, questions, users }, { id }) {
    const user = users[id]
    return {
        user,
        authedUser
    }
}

export default connect(mapStateToProps)(Leader)