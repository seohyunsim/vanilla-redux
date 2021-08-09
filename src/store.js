import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 

const ADD = 'ADD';
const DELETE = 'DELETE';

const addToDo = text => {
    return {
        type: ADD,
        text
    }
};

const deleteToDo = id => {
    return {
        type: DELETE,
        id: parseInt(id)
    }
};

const reducer = (state = [], action) => {
    switch (action.type) {
        case ADD:
            return [...state, { text: action.text, id: Date.now() }];
        case DELETE:
            return state.filter(toDo => toDo.id !== action.id);
        default:
            return state;
    }
};

const persistConfig = {
    key: 'root',
    storage
};

const persistedState = persistReducer(persistConfig, reducer);


export const actionCreators = {
    addToDo,
    deleteToDo
};

export default function configureStore() {
    const store = createStore(persistedState);
    const persistor = persistStore(store);
    return { store, persistor };
}