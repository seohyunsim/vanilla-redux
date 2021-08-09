// import react from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';

function Detail ({ toDo, onDetailBtnClick }) {
    return (
        <div>
            <h1>{ toDo?.text }</h1>
            <h5>Create at: {toDo?.id}</h5>
            <button onClick={onDetailBtnClick}>삭제</button>
        </div> 
    );  
}

function mapStateToProps(state, ownProps) {
    const id = ownProps.match.params.id;
    return { toDo: state.find(toDo => toDo.id === parseInt(id)) };
}

function mapDispatchToProps(dispatch, ownProps) {
    const id = ownProps.match.params.id;
    return {
        onDetailBtnClick: () => {
            alert('삭제가 완료되었습니다.');
            document.location.href = '/';
            dispatch(actionCreators.deleteToDo(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);