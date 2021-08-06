import React, { useState } from 'react'
import { connect } from 'react-redux';
import ToDo from '../Components/ToDo';
import { actionCreators } from '../store';

export const Home = ({ toDos, addToDo }) => {
    const [text, setText] = useState('');

    const onChange = e => {
        setText(e.target.value);
    }

    const onSubmit = e => {
        e.preventDefault();
        setText('');
        addToDo(text);
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <h1>To Do</h1>
                <input type='text' value={text} placeholder='할 일을 입력하세요.' onChange={onChange}/>
                <button>추가</button>
                <ul>
                    {toDos.map(toDo => 
                    <ToDo {...toDo} key={toDo.id}/>
                    )}
                    </ul>
            </form>
        </div>
    )
}

function mapStateToProps(state) {
    return { toDos: state };
}

function mapDispatchToProps(dispatch) {
    return {
        addToDo: text => dispatch(actionCreators.addToDo(text))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
