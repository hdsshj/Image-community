import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import Login from '../pages/Login';
import PostList from '../pages/PostList';
import SignUp from '../pages/SignUp';


import './App.css';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Route path = '/' component = {PostList} exact/>
        <Route path = '/signup' component = {SignUp}/>
        <Route path = '/login' component = {Login}/>

      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
