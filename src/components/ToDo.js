import React from 'react'
import { connect } from 'react-redux';
import { actionCreators } from '../store';

export const Todo = ({ text, onBtnClick }) => {
    return (
        <li>
            {text}
            <button onClick={onBtnClick}>삭제</button>
        </li>
    );
}

function mapDispatchToProps(dispatch, ownprops) {
    return {
        onBtnClick: () => dispatch(actionCreators.deleteToDo(ownprops.id))
    }
}

export default connect(null, mapDispatchToProps)(Todo);