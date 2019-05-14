import { _saveQuestionAnswer, _saveQuestion, formatQuestion } from '../utils/_DATA'
import { showLoading, hideLoading } from 'react-redux-loading'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER'
export const ADD_QUESTION = 'ADD_QUESTION'

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}

function saveQuestionAnswer({ authedUser, qid, answer }) {
    return {
        type: SAVE_QUESTION_ANSWER,
        savedAnswerObj: {
            authedUser,
            qid,
            answer
        }
    }
}

/**
 * Async function to add reply to the poll
 */
export function handleSaveQuestionAnswer(answer, qid) {
    return (dispatch, getState) => {
        const { authedUser } = getState()
        dispatch(showLoading())
        return _saveQuestionAnswer({
            authedUser,
            qid,
            answer
        }).then(() => dispatch(saveQuestionAnswer({
            authedUser,
            qid,
            answer
        }))).then(() => dispatch(hideLoading()))
    }
}

function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question
    }
}
/**
 * Asynchronously handle question adding
 * @param {*} optionOneText 
 * @param {*} optionTwoText 
 */
export function handleAddQuestion(optionOneText, optionTwoText) {
    return (dispatch, getState) => {

        const { authedUser } = getState()

        dispatch(showLoading())

        const formattedQuestion = formatQuestion({
            optionOneText,
            optionTwoText,
            author: authedUser
        })

        return _saveQuestion(formattedQuestion)
            .then((question) => dispatch(addQuestion(question)))
            .then(() => dispatch(hideLoading()))
    }
}