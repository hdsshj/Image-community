// Post.js
import React from "react";

// import Grid from "../elements/Grid";
// import Image from "../elements/Image";
// import Text from "../elements/Text";

import {Grid, Image, Text} from '../elements/index'


const Post = (props) => {
    console.log(props)
    return(
        <React.Fragment>
            <Grid >
                <Grid is_flex >
                    
                    <Image shape='circle' src = {props.src}/>
                    <Text bold>{props.user_info.user_name}</Text>
                    <Text>{props.insert_dt}</Text>


                </Grid>
                <Grid padding = '16px'>
                    
                </Grid>
                <Grid>
                     <Text>{props.contents}</Text>

                    <Image shape = 'rectangle' src = {props.src}/>
                </Grid>
                <Grid padding = '16px'>
                <Text bold> 댓글 {props.comment_cnt}개</Text>
                
                </Grid>
                <div>user profile / user name / insert_dt</div>
                <div>contents</div>
                <div>image</div>
                <div>comment count</div>
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
    contents : '고양이네요',
    comment_cnt : 10,
    insert_dt : '2021-09-30 10:00:00'
};

export default Post