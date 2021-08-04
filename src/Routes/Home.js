import React, { useState } from 'react'

export const Home = () => {
    const [text, setText] = useState('');

    const onChange = e => {
        setText(e.target.value);
    }

    const onSubmit = e => {
        e.preventDefault();
        setText('');
        console.log(text);
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <h1>To Do</h1>
                <input type='text' value={text} placeholder='할 일을 입력하세요.' onChange={onChange}/>
                <button>추가</button>
                <ul></ul>
            </form>
        </div>
    )
}

export default Home;
