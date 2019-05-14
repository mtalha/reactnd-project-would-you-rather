import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleSaveQuestionAnswer } from '../actions/questions'
import { Redirect } from 'react-router-dom'


class PollView extends Component {

    state = {
        selectedOption: 'optionOne'
    }

    handleOptionChange = (e) => {
        this.setState({
            selectedOption: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { selectedOption } = this.state
        const { dispatch, match } = this.props
        const qid = match.params.id
        dispatch(handleSaveQuestionAnswer(selectedOption, qid))
    }

    render() {
        const {
            authedUser,
            questions,
            users,
            match
        } = this.props

        const id = match.params.id
        const thisQuestion = questions[id]

        if (!thisQuestion) {
            const redirectPath = '/' + {id}
            return <Redirect to={redirectPath} />
        }

        const {
            optionOne, optionTwo
        } = thisQuestion

        const author = users[thisQuestion.author]
        const optionOneUser = optionOne.votes.filter(user => user === authedUser)
        const optionTwoUser = optionTwo.votes.filter(user => user === authedUser)

        let yourAnswer = false
        let youAnsweredA = false
        const optionOneVotes = thisQuestion.optionOne.votes.length
        const optionTwoVotes = thisQuestion.optionTwo.votes.length
        const totalVotes = optionOneVotes + optionTwoVotes
        const optionOnePercentage = parseFloat((optionOneVotes/totalVotes) * 100).toFixed(1) + '%'
        const optionTwoPercentage = parseFloat((optionTwoVotes/totalVotes) * 100).toFixed(1) + '%'
        
        if (optionOneUser.length > 0 || optionTwoUser.length > 0) {
            yourAnswer = true;
            youAnsweredA = false;
            if (optionOneUser.length > 0) {
                youAnsweredA = true
            }
        }

        return (
            <div>
                <div className='question-box'><b>Asked by {author.name}</b></div>
                <div className='question'>

                    <img
                        src={author.avatarURL}
                        alt={`Avatar of ${author.name}`}
                        className='avatar'
                    />

                    <div className='question-info'>
                        {yourAnswer && <div>
                            <span>Results</span>
                            <div className='poll-result-box poll-result-box-relative'>
                                <div>Would you rather {youAnsweredA ? thisQuestion.optionOne.text : thisQuestion.optionTwo.text}</div>
                                <progress value={youAnsweredA ? optionOneVotes : optionTwoVotes} max={totalVotes} data-label={youAnsweredA ? optionOnePercentage : optionTwoPercentage}></progress>
                                <div className='center'>{youAnsweredA ? optionOneVotes : optionTwoVotes} of {totalVotes} votes</div>
                                {yourAnswer && <div className='your-vote'>
                                    <div className='badge-orange'>Your<br></br>Vote</div>
                                </div>
                                }
                            </div>
                            <div className='poll-result-box'>
                                <div>Would you rather {youAnsweredA ? thisQuestion.optionTwo.text : thisQuestion.optionOne.text}</div>
                                <progress value={youAnsweredA ? optionTwoVotes : optionOneVotes} max={totalVotes} data-label={youAnsweredA ? optionTwoPercentage : optionOnePercentage}></progress>
                                <div className='center'>{youAnsweredA ? optionTwoVotes : optionOneVotes} of {totalVotes} votes</div>
                            </div>
                        </div>}

                        {!yourAnswer && <form className='poll-view-box' onSubmit={this.handleSubmit}>
                            <h3>Would You Rather...</h3>
                            <div>
                                <label className='radio-btn-container'>
                                    <input type='radio' id='optionOne' name={thisQuestion.id} value='optionOne'
                                        checked={this.state.selectedOption === 'optionOne'}
                                        onChange={this.handleOptionChange} />
                                    <span className='radio-btn-checkmark'></span>
                                    {thisQuestion.optionOne.text}
                                </label>
                            </div>
                            <div>
                                <label className='radio-btn-container'>
                                    <input type='radio' id='optionTwo' name={thisQuestion.id} value='optionTwo'
                                        checked={this.state.selectedOption === 'optionTwo'}
                                        onChange={this.handleOptionChange} />
                                    <span className='radio-btn-checkmark'></span>
                                    {thisQuestion.optionTwo.text}
                                </label>
                            </div>
                            <button
                                className='btn'
                                type='submit'>
                                Submit
                            </button>
                        </form>}
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ authedUser, questions, users }) {
    return {
        authedUser,
        questions,
        users
    }
}

export default connect(mapStateToProps)(PollView)