import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'

class QuestionsList extends Component {
    render() {
        const {
            authedUser,
            questionsList
        } = this.props

        if (authedUser === null) {
            return <p>Loading Data in Questions list...</p>
        }

        return (
            <div>
                <ul >
                    {questionsList.length ?
                        questionsList.map((id) => (
                            <li key={id}><Question id={id} /></li>
                        ))
                        : <li><span>You have not answered any question yet!</span></li>
                    }
                </ul>
            </div>
        )
    }
}


function mapStateToProps({ authedUser }, { questionsList }) {
    return ({
        authedUser,
        questionsList
    })
}
export default connect(mapStateToProps)(QuestionsList)