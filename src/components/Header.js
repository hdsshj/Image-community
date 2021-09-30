import React from "react";
import styled from "styled-components";

import {Grid, Image, Button} from '../elements/index'

const Header = (props) => {

    return (
        <React.Fragment>
            <Grid is_flex bg ={props.bg} margin = '0px 0px 16px 0px'>
                <Image shape = 'logo' src = {props.src}/>
                <Button shape = 'short' >회원가입</Button>
                <Button shape = 'short' >로그인</Button>
            </Grid>
        </React.Fragment>
    );
}

Header.defaultProps = {
    src : 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2560px-React-icon.svg.png',
    bg : '#FFF'
}

export default Header;