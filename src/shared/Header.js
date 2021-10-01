import React from "react";
import styled from "styled-components";

import { Grid, Image, Button } from "../elements/index";
import { getCookie, deleteCookie } from "./cookie";

import { useSelector, useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

const Header = (props) => {
  const dispatch = useDispatch();
  const is_login = useSelector((state) => state.user.is_login);
  console.log(is_login)
  const { join, bg, src } = props;


  if (is_login) {
    return (
      <React.Fragment>
        <Grid is_flex bg={props.bg} margin="0px 0px 16px 0px">
          <Image shape="logo" src={props.src} />
          <Button shape="short">내 정보</Button>
          <Button shape="short">알림</Button>
          <Button
            shape="short"
            _onClick={() => {
              dispatch(userActions.logOut({})
              )}}
          >
            로그아웃
          </Button>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <Grid is_flex bg={props.bg} margin="0px 0px 16px 0px">
        <Image shape="logo" src={props.src} />
        <Button
          shape="short"
          _onClick={() => {
            console.log("회원가입 눌러썽");
          }}
        >
          회원가입
        </Button>
        <Button
          shape="short"
          _onClick={() => {
            console.log("로그인 눌러썽");
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
