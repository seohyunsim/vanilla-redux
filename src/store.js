import { createStore } from 'redux';
import { createAction } from '@reduxjs/toolkit';

const addToDo = createAction('ADD');
const deleteToDo = createAction('DELETE');

// localStorage에 저장하기
// const defaultState = {
//     items: JSON.parse(localStorage.getItem('items')) || []
// }; 

const reducer = (state = [], action) => {
    switch (action.type) {
        case addToDo.type:
            return [...state, { text: action.payload, id: Date.now() }];
        case deleteToDo.type:
            return state.filter(toDo => toDo.id !== action.payload);
        default:
            return state;
    }
};

const store = createStore(reducer);

export const actionCreators = {
    addToDo,
    deleteToDo
};

export default store;