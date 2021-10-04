import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import {ConnectedRouter} from 'connected-react-router'
import { history } from '../redux/configureStore';

import Login from '../pages/Login';
import PostList from '../pages/PostList';
import SignUp from '../pages/SignUp';
import PostDetail from '../pages/PostDetail';
import PostEdit from '../pages/PostEdit';
import Notice from '../pages/Notice'
import Search from './Search';

import Header from '../shared/Header';
import { Grid, Button } from '../elements';

import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as userActions } from '../redux/modules/user';

import { apiKey } from './firebase';

import './App.css';
import Permit from './Permit';

function App() {
  const dispatch = useDispatch();
  const post_id = useSelector((state) => state.post.list)

  const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`
  const is_session = sessionStorage.getItem(_session_key) ? true : false

  React.useEffect(() => {
    
    if(is_session){
      dispatch(userActions.loginCheckFB())

    }
  }, [])

  return (
    <React.Fragment>
      <Grid>
        <Header /> 
      </Grid>
      <ConnectedRouter history = {history}>
        
        <Route path = '/' component = {PostList} exact/>

        <Route path = '/signup' component = {SignUp} exact/>
        <Route path = '/login' component = {Login} exact/>
        <Route path = '/detail/:id' component = {PostDetail} exact/>
        <Route path = '/edit/:id' component = {PostEdit} exact/>
        <Route path = '/edit' component = {PostEdit} exact/>
        <Route path = '/notice' component = {Notice}exact/>
        <Route path = '/search' component = {Search}exact/>
        <Permit>
          <Button is_float _onClick = {() => {history.push('/edit')}}>+</Button>
        </Permit>
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
