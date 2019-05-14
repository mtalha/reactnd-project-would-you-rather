import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/questions'
import { Redirect } from 'react-router-dom'

class NewQuestion extends Component {
    state = {
        textOptionOne: '',
        textOptionTwo: '',
        toHome: false
    }

    handleOptionOneChange = (e) => {
        const text = e.target.value
        this.setState(() => ({
            textOptionOne: text
        }))
    }

    handleOptionTwoChange = (e) => {
        const text = e.target.value
        this.setState(() => ({
            textOptionTwo: text
        }))
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const { textOptionOne, textOptionTwo } = this.state
        const { dispatch } = this.props

        this.setState(() => ({
            textOptionOne: '',
            textOptionTwo: '',
            toHome: true
        }))

        dispatch(handleAddQuestion(textOptionOne, textOptionTwo))
    }

    render() {

        const { textOptionOne, textOptionTwo, toHome } = this.state

        if (toHome === true) {
            return <Redirect to='/' />
        }
        
        return (
            <div>
                <h2 className='center'>Create New Question</h2>
                <form className='new-question' onSubmit={this.handleSubmit}>
                    <div className='new-question-box'>
                        <h4>Complete the question: </h4>
                        <h3>Would You Rather...</h3>
                        <div className="new-question">
                            <input
                                type="text"
                                placeholder="Enter Option One Text Here"
                                value={textOptionOne}
                                onChange={this.handleOptionOneChange}
                                className='textinput'
                                maxLength={80}
                            />
                            <h3>OR</h3>
                            <input
                                type="text"
                                placeholder="Enter Option Two Text Here"
                                value={textOptionTwo}
                                onChange={this.handleOptionTwoChange}
                                className='textinput'
                                maxLength={80}
                            />
                            <button
                                className='btn-new-question'
                                type='submit'
                                disabled={textOptionOne === '' || textOptionTwo === ''}>
                                Submit
                        </button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default connect()(NewQuestion)