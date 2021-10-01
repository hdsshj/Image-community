import React from "react";
import Header from "../shared/Header";

import {Grid, Image, Text, Button, Input } from '../elements/index'

const SignUp = (props) => {
    return (
        <React.Fragment>
            <Header/>
            <Grid padding = '16px' margin = '0px'>
                <Text subject bold size = '40px'>{props.title_text}</Text>
            </Grid>
            <Grid padding = '16px 16px 0px 16px'>
                <Input place = {props.id_place}>{props.id_label}</Input>
            </Grid>
            <Grid padding = '16px 16px 0px 16px'>
                <Input place = {props.nick_place}>{props.nick_label}</Input>
            </Grid>
            <Grid padding = '16px 16px 0px 16px'>
                <Input id = 'pw1' type = 'password' place = {props.pw_place}>{props.pw_label}</Input>
            </Grid>
            <Grid padding = '16px 16px 0px 16px'>
                <Input type = 'password' place = {props.re_pw_place}>{props.re_pw_label}</Input>
            </Grid>
            <Grid padding = '16px'>
                <Button _onClick = {() => {console.log('!!')}}>{props.btn_text}</Button>
            </Grid>
        </React.Fragment>
    );
}

SignUp.defaultProps = {
    title_text : '회원가입',
    id_label : '아이디',
    id_place : '아이디를 입력하세요',
    nick_label : '닉네임',
    nick_place : '닉네임을 입력하세요',
    pw_label : '비밀번호',
    pw_place : '비밀번호를 입력하세요',
    re_pw_label : '비밀번호 확인',
    re_pw_place : '비밀번호를 다시 입력하세요',
    btn_text : '회원가입하기',
}


export default SignUp;