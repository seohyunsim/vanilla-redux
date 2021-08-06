import React from 'react'
import { connect } from 'react-redux';
import { actionCreators } from '../store';

export const ToDo = ({ text, onBtnClick }) => {
    return (
        <div>
            <li>{text} <button onClick={onBtnClick}>삭제</button>
            
            </li>
        </div>
    )
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        onBtnClick: () => dispatch(actionCreators.deleteToDo(ownProps.id))
    }
}

export default connect(null, mapDispatchToProps)(ToDo);
