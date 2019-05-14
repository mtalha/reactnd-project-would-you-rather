import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Question extends Component {

    render() {
        const { id, author, thisQuestion } = this.props

        return (
            <div>
                <div className='question-box'>{author.name} asks:</div>
                <div className='question'>
                    <img
                        src={author.avatarURL}
                        alt={`Avatar of ${author.name}`}
                        className='avatar'
                    />
                    <div className='question-info'>
                        <div>
                            <span>Would you rather</span>
                            <div>{thisQuestion.optionOne.text}</div>
                            <Link to={`/questions/${id}`}>
                                <button className='btn'>
                                    View Poll
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ users, questions, authedUser }, { id }) {
    const thisQuestion = questions[id]
    const author = users[thisQuestion.author]
    return {
        id,
        author,
        authedUser,
        thisQuestion
    }
}

export default connect(mapStateToProps)(Question)