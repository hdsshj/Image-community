import React from "react";
import styled from "styled-components";

const Input = (props) => {
    const {width, height, textarea, place, type, children, _ref} = props;

    const styles = {
        width: width,
        height: height,
    }

    if(textarea === true){
        return (
            <React.Fragment>
            <AreaBox {...styles} placeholder = {place}/>
        </React.Fragment>
        );
    }

    return (
        <React.Fragment>
            <label>{children}</label>
            <Box {...styles} ref = {_ref} type = {type} placeholder = {place}/>
        </React.Fragment>
    );
};

Input.defaultProps = {
    children : null,
    _ref : null,
    textarea : false,
    type : 'text',
    place : null,
    width : '100%',
    height : '50px'
}

const AreaBox = styled.textarea`
    width: ${(props) => props.width};
    height: 30vh;
    box-sizing: border-box;

`;

const Box = styled.input`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    box-sizing: border-box;
`;

export default Input;