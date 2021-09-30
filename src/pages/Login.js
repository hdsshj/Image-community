import React from "react";
import Header from "../shared/Header";

import {Grid, Text, Button, Input } from '../elements/index'

const Login = (props) => {
    return (
        <React.Fragment>

            <Header/>
            <Grid padding = '16px' margin = '0px'>
                <Text subject bold size = '40px'>로그인</Text>
            </Grid>
            <Grid padding = '16px'>
                <Input place = {props.id_place}>{props.id_label}</Input>
            </Grid>
            <Grid padding = '16px'>
            <Input type = 'password' place = {props.pw_place}>{props.pw_label}</Input>
            </Grid>
            <Grid padding = '16px'>
                <Button>{props.btn_text}</Button>
            </Grid>
        </React.Fragment>
    );
}

Login.defaultProps = {
    title_text : '로그인',
    id_label : '아이디',
    id_place : '아이디를 입력하세요',
    pw_label : '비밀번호',
    pw_place : '비밀번호를 입력하세요',
    btn_text : '로그인하기',
}

export default Login;