import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionCreators } from '../store';

export const Todo = ({ text, onBtnClick, id }) => {
    return (
        <li>
            <Link to={`/${id}`}>
                {text}
                <button onClick={onBtnClick}>삭제</button>
            </Link>
        </li>
    );
}

function mapDispatchToProps(dispatch, ownprops) {
    return {
        onBtnClick: () => dispatch(actionCreators.deleteToDo(ownprops.id))
    }
}

export default connect(null, mapDispatchToProps)(Todo);