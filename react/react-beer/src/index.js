import React from 'react'
import {render} from 'react-dom'
import {BrowserRouter,Route} from 'react-router-dom'
import App from './App';
import './style.css';
import Single from './components/Single';

render(
        <BrowserRouter>
        <div>
            <Route exact path='/' component={App} />
            <Route path='/beer' component={Single} />
            <Route path='/search/:searchTerm' component={App}/>
        </div>
        </BrowserRouter>,document.getElementById('root'))