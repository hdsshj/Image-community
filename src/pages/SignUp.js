import React from "react";
import Header from "../shared/Header";

import {Grid, Image, Text, Button, Input } from '../elements/index'

import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

const SignUp = (props) => {
    const dispatch = useDispatch();

    // state로 만듬
    const [id, setId] = React.useState(''); 
    const [pw, setPw] = React.useState(''); 
    const [pwcheck, setPwCheck] = React.useState(''); 
    const [user_name, setUserName] = React.useState(''); 

    const signup = () => {

        if(id === '' || pw === '' || user_name === ''){
            return;
        }

        if(pw !== pwcheck){
            return;
        }

        
        console.log(id, pw, user_name)
        dispatch(userActions.signupFB(id, pw, user_name))
    };

    return (
        <React.Fragment>
            <Grid padding = '16px' margin = '0px'>
                <Text subject bold size = '40px'>{props.title_text} </Text>
            </Grid>
            {/* id 입력창 */}
            <Grid padding = '16px 16px 0px 16px'>
                <Input  _onChange = {(e)=>{setId(e.target.value)}}  place = {props.id_place}>{props.id_label}</Input>
            {/* nick 입력창 */}
            </Grid>
            <Grid padding = '16px 16px 0px 16px'>
                <Input _onChange = {(e)=>{setUserName(e.target.value)}} place = {props.nick_place}>{props.nick_label}</Input>
            {/* pw 입력창 */}
            </Grid>
            <Grid padding = '16px 16px 0px 16px'>
                <Input _onChange = {(e)=>{setPw(e.target.value)}} type = 'password' place = {props.pw_place}>{props.pw_label}</Input>
            {/* pwcheck 입력창 */}
            </Grid>
            <Grid padding = '16px 16px 0px 16px'>
                <Input _onChange = {(e)=>{setPwCheck(e.target.value)}} type = 'password' place = {props.re_pw_place}>{props.re_pw_label}</Input>
            </Grid>
            <Grid padding = '16px'>
                <Button _onClick = {signup}>{props.btn_text}</Button>
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