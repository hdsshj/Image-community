// Post.js
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { history } from "../redux/configureStore";

// import Grid from "../elements/Grid";
// import Image from "../elements/Image";
// import Text from "../elements/Text";

import {Grid, Image, Text, Button} from '../elements/index'


const Post = (props) => {
    const user_uid = useSelector((state) => state.user.user ? state.user.user.uid : '')
    const post_uid = useSelector((state) => state.post.list)

    console.log(props)
    const edit = () => {
        history.push(`/edit/${props.id}`)
    }

    return(
        <React.Fragment>
            <Grid margin = '16px 0px 0px 0px'>
                <Grid is_flex padding = '16px'>
                    
                    <Image shape='circle' src = {props.src}/>
                    <Text bold>{props.user_info.user_name}</Text>
                    <Text>{props.insert_dt}</Text>
                    {/* props에 is_me가 있으면 버튼을 보여준다 */}
                    {props.is_me && <Button height = '30px' width = '50px' crud margin = '20px' padding= '4px' _onClick = {edit}>수정</Button>}


                </Grid>
                <Grid padding = '16px'>
                    
                </Grid>
                <Grid>
                     <Text>{props.contents}</Text>

                    <Image shape = 'rectangle' src = {props.image_url}/>
                </Grid>
                <Grid padding = '16px'>
                <Text bold> 댓글 {props.comment_cnt}개</Text>
                
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

Post.defaultProps = {
    user_info: {
        user_name : 'wooseok',
        user_profile : 'https://media.vlpt.us/images/wswj9608/profile/4d70b800-84e2-4ced-ad7d-f71413a6f5a7/KakaoTalk_20210918_153459873.jpg?w=240'
    },
    image_url : 'https://media.vlpt.us/images/wswj9608/profile/4d70b800-84e2-4ced-ad7d-f71413a6f5a7/KakaoTalk_20210918_153459873.jpg?w=240',
    contents : '간절곶 입니다',
    comment_cnt : 10,
    insert_dt : '2021-09-30 10:00:00'
};

export default Post