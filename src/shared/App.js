import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import {ConnectedRouter} from 'connected-react-router'
import { history } from '../redux/configureStore';

import Login from '../pages/Login';
import PostList from '../pages/PostList';
import SignUp from '../pages/SignUp';


import './App.css';

function App() {
  return (
    <React.Fragment>
      <ConnectedRouter history = {history}>
        <Route path = '/' component = {PostList} exact/>
        <Route path = '/signup' component = {SignUp}/>
        <Route path = '/login' component = {Login}/>
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
