import { createStore } from "redux";

const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

const addTodo = 'addTodo';
const deleteTodo = 'deleteTodo';


const reducer = (state = [], action) => {
  switch(action.type) {
    case addTodo:
      return [...state, { text : action.text, id : Date.now() }];
    case deleteTodo:
      return state.filter(toDo => toDo.id !== action.id);
    default:
      return state;
  }
}

const store = createStore(reducer);

store.subscribe(() => console.log(store.getState()));

const paintTodos = () => {
  const toDos = store.getState();
  ul.innerHTML = '';
  toDos.forEach(toDo => {
    const li = document.createElement('li');
    const btn = document.createElement('button');
    btn.innerText = '삭제';
    btn.addEventListener('click', dispatchDeleteTodo);
    li.id = toDo.id;
    li.innerText = toDo.text;
    li.appendChild(btn);
    ul.appendChild(li);
  });
}

store.subscribe(paintTodos);

const dispatchAddTodo = text => {
  store.dispatch({ type : addTodo, text });
}

const dispatchDeleteTodo = (e) => {
  const id = parseInt(e.target.parentNode.id);
  store.dispatch({ type : deleteTodo, id });
}

const onSubmit = e => {
  e.preventDefault();
  const toDo = input.value;
  input.value = '';
  dispatchAddTodo(toDo);
}

form.addEventListener('submit', onSubmit);