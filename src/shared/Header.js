import React from "react";
import styled from "styled-components";

import { Grid, Image, Button } from "../elements/index";
import { getCookie, deleteCookie } from "./cookie";

import { useSelector, useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

import { history } from "../redux/configureStore";
import { apiKey } from "./firebase";

import Permit from "./Permit";
import NotiBadge from "../components/NotiBadge";

const Header = (props) => {
  const dispatch = useDispatch();
  const is_login = useSelector((state) => state.user.is_login);

  const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;
  const is_session = sessionStorage.getItem(_session_key) ? true : false;


  // if (is_login && is_session) {
  //   return (
      
  //   );
  // }

 

if(is_login && is_session){
  return(
    <Permit>
    <React.Fragment>
        <Grid is_flex bg={props.bg} margin="0px 0px 16px 0px">
          <Image _onClick = {() => {history.push('/')}} shape="logo" src={props.src} />
          <Button short>내 정보</Button>
          {/* <Button short _onClick = {()=>{history.push('/notice')}}>알림</Button> */}
          <NotiBadge _onClick = {()=>{history.push('/notice')}}/>
          <Button
            short
            _onClick={() => {
              dispatch(userActions.logoutFB());
            }}
          >
            로그아웃
          </Button>
        </Grid>
      </React.Fragment>
</Permit>
  );
}

  

  return (
    <React.Fragment>
      <Grid is_flex bg={props.bg} margin="0px 0px 16px 0px">
        <Image shape="logo" src={props.src} />
        <Button
          short
          _onClick={() => {
            history.push("/signup");
          }}
        >
          회원가입
        </Button>
        <Button
          short
          _onClick={() => {
            history.push("/login");
          }}
        >
          로그인
        </Button>
      </Grid>
    </React.Fragment>
  );
};

Header.defaultProps = {
  src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2560px-React-icon.svg.png",
  bg: "#FFF",
};

export default Header;
