import React from "react";
import styled from "styled-components";

const Button = (props) => {
    const {children, height, short, _onClick, is_float, crud} = props;

    const styles = {
        height:height
    }
    if (short){
        return (
            <React.Fragment>
                <ShortBtn onClick = {_onClick} {...styles}>{children}</ShortBtn>
            </React.Fragment>
        );
    }
    
    if (is_float){
        return (
            <React.Fragment>
                <FloatBtn onClick = {_onClick} {...styles}>{children}</FloatBtn>
            </React.Fragment>
        );
    }

    if (crud){
      return (
            <React.Fragment>
                <MyBtn onClick = {_onClick} {...styles}>{children}</MyBtn>
            </React.Fragment>
        );  
    }

    
    
        return (
            <React.Fragment>
                <Btn onClick = {_onClick} {...styles}>{children}</Btn>
            </React.Fragment>
        );
   
    


  
}

Button.defaultProps = {
    children : null,
    short : false,
    height : '50px',
    _onClick: () => {},
    is_float : false,
    crud : false
}

const ShortBtn = styled.button`
    width: 25%;
    background-color: #C4C4C4;
    color: #222831;
    border : 0px;
    margin: 8px;
    padding: 0px;

    height:${(props) => props.height};

`;

const Btn = styled.button`
    width: 100%;
    background-color: #222831;
    color: #FFF;
    border : 0px;
    margin-top: 28px;
    
    height:${(props) => props.height};
`;

const MyBtn = styled.button`
    width: 10%;
    height: 30px;
    box-sizing: border-box;

`;

const FloatBtn = styled.button`
    width: 50px;
    height: 50px;
    background-color: #212121;
    color: #FFF;
    border : none;
    border-radius: 50px;
    box-sizing: border-box;
    padding: 0px;
    font-size: 36px;
    font-weight: 800;
    position: fixed;
    bottom: 50px;
    right: 16px;
`;

export default Button;

