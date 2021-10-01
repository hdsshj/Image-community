import React from "react";
import styled from "styled-components";

const Button = (props) => {
    const {children, height, shape, _onClick} = props;

    const styles = {
        height:height
    }
    if (shape === 'short'){
        return (
            <React.Fragment>
                <ShortBtn onClick = {_onClick} {...styles}>{children}</ShortBtn>
            </React.Fragment>
        );
    }
    
    if (shape === 'full'){
        return (
            <React.Fragment>
                <Btn onClick = {_onClick} {...styles}>{children}</Btn>
            </React.Fragment>
        );
    }


    return (
        <React.Fragment>
        </React.Fragment>
    );
}

Button.defaultProps = {
    children : null,
    shape : 'full',
    height : '50px',
    _onClick: () => {},
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

export default Button;

