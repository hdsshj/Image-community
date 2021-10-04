import React from "react";
import { actionCreators as imageActions } from "../redux/modules/image";
import { useDispatch, useSelector } from "react-redux";

import { Input, Button } from "../elements/index";
import { storage } from "./firebase";


const Upload = (props) => {
    const fileInput = React.useRef();

    const dispatch = useDispatch();
    const is_uploading = useSelector(state => state.image.uploading);


    const uploadFB = () => {
        let image = fileInput.current.files[0];
            console.log(image)
            // 업로드
        dispatch(imageActions.uploadImageFB(image));
    } 

    

    const selectFile = (e) => {
        
        console.log(fileInput.current.files[0]);

        const reader = new FileReader();
        const file = fileInput.current.files[0];

        reader.readAsDataURL(file);

        reader.onloadend = () => {
            console.log(reader.result)
            dispatch(imageActions.setPreview(reader.result))
        }

    }

    return (
        <React.Fragment>
            <Input _ref = {fileInput} _onChange = {selectFile} type="file" disabled = {is_uploading}/>
            <Button _onClick = {uploadFB} >업로드하기</Button>
        </React.Fragment>
    )
}

Upload.defaultProps = {
    is_edit : false,
    image : null,
}

export default Upload;