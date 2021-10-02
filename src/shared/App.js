import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import {ConnectedRouter} from 'connected-react-router'
import { history } from '../redux/configureStore';

import Login from '../pages/Login';
import PostList from '../pages/PostList';
import SignUp from '../pages/SignUp';
import PostDetail from '../pages/PostDetail';
import PostEdit from '../pages/PostEdit';

import Header from '../elements';
import { Grid, Button } from '../elements';

import { useDispatch } from 'react-redux';
import { actionCreators as userActions } from '../redux/modules/user';

import { apiKey } from './firebase';

import './App.css';
import Permit from './Permit';

function App() {
  const dispatch = useDispatch();

  const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`
  const is_session = sessionStorage.getItem(_session_key) ? true : false

  React.useEffect(() => {
    
    if(is_session){
      dispatch(userActions.loginCheckFB())

    }
  }, [])

  return (
    <React.Fragment>
      <ConnectedRouter history = {history}>
        
        <Route path = '/' component = {PostList} exact/>

        <Route path = '/signup' component = {SignUp}/>
        <Route path = '/login' component = {Login}/>
        <Route path = '/detail' component = {PostDetail}/>
        <Route path = '/edit' component = {PostEdit}/>
        <Permit>
          <Button is_float >+</Button>
        </Permit>
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
