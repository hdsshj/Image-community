import React, { useRef } from "react";
import Header from "../shared/Header";

//최소단위 컴포넌트
import { Grid, Text, Button, Input } from "../elements/index";

//Cookie
import { getCookie, setCookie, deleteCookie } from "../shared/cookie";

import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

const Login = (props) => {
  const [id, setId] = React.useState("");
  const [pw, setPw] = React.useState("");
  const dispatch = useDispatch();

  function CheckEmail(str) {
    var reg_email =
      /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;

    if (!reg_email.test(str)) {
      return false;
    } else {
      return true;
    }
  }

  const id_check = CheckEmail(id);
  

  const login = () => {
    if (id === "" || pw === "") {
      window.alert("아이디 혹은 비밀번호를 입력 해주세요.");
      return;
    }
    
    if (!id_check){
      window.alert("아이디를 이메일 형식으로 입력 해주세요.");
      return
    }
    

    dispatch(userActions.loginFB(id, pw));
  };
  const addCookie = () => {
    let date = new Date();

    console.log(date);
    let endDate = new Date(
      date.getTime() + 1000 * 60 * 60 * 24 * 3
    ).toUTCString();
    console.log(endDate);

    // console.log(pw_in.current.value, id_in.current.value)
  };

  return (
    <React.Fragment>
      <Header />
      <Grid padding="16px" margin="0px">
        <Text subject bold size="40px">
          로그인
        </Text>
      </Grid>
      <Grid padding="16px">
        <Input
          _onChange={(e) => {
            setId(e.target.value);
          }}
          place={props.id_place}
        >
          {props.id_label}
        </Input>
      </Grid>
      <Grid padding="16px">
        <Input
          _onChange={(e) => {
            setPw(e.target.value);
          }}
          type="password"
          place={props.pw_place}
        >
          {props.pw_label}
        </Input>
      </Grid>
      <Grid padding="16px">
        {/* <Button _onClick = {login}>{props.btn_text}</Button> */}
        <Button _onClick={login}>{props.btn_text}</Button>
      </Grid>
    </React.Fragment>
  );
};

Login.defaultProps = {
  title_text: "로그인",
  id_label: "아이디",
  id_place: "아이디를 입력하세요",
  pw_label: "비밀번호",
  pw_place: "비밀번호를 입력하세요",
  btn_text: "로그인하기",
};

export default Login;
