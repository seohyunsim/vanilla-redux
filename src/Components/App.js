import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Home from '../Routes/Home';
import Detail from '../Routes/Detail';

export const App = () => {
    return (
        <Router>
            <Route path='/' exact component={Home}></Route>
            <Route path='/:id' exact component={Detail}></Route>
        </Router>
    )
}

export default App;