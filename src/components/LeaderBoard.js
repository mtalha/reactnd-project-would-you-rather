import React, { Component } from 'react'
import { connect } from 'react-redux'
import Leader from './Leader'

class LeaderBoard extends Component {
    render() {
        return (
            <div>
                {<ul>
                    {this.props.userIds.map((id) => (
                        <li key={id}>
                            <Leader id={id} />
                        </li>
                    ))}
                </ul>}
            </div>
        )
    }
}

function mapStateToProps({ users }) {
    const userIds = Object.keys(users)
        .sort((a, b) => (Object.keys(users[b].answers).length + users[b].questions.length) - (Object.keys(users[a].answers).length + users[a].questions.length))
    return {
        userIds
    }
}
export default connect(mapStateToProps)(LeaderBoard)