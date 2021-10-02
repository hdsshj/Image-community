import React from "react";
import styled from "styled-components";

const Input = (props) => {
    const {width, height, textarea, place, type, children, _onChange, margin, padding} = props;

    const styles = {
        width: width,
        height: height,
        margin: margin,
        padding:padding,
    }

    if(textarea === true){
        return (
            <React.Fragment>
                <label>{children}</label>
            <AreaBox {...styles} placeholder = {place}/>
        </React.Fragment>
        );
    }

    return (
        <React.Fragment>
            <label>{children}</label>
            <Box {...styles} type = {type} placeholder = {place} onChange = {_onChange}/>
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
    height : '50px',
    margin : false,
    padding : false,
    _onChange : () => {},
}

const AreaBox = styled.textarea`
    width: ${(props) => props.width};
    height: 30vh;
    box-sizing: border-box;

`;

const Box = styled.input`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    margin: ${(props) => props.margin};
    padding: ${(props) => props.padding};
    box-sizing: border-box;
`;

export default Input;