import React from "react";

import { Image, Text, Button, Grid } from "../elements/index";
import {history} from '../redux/configureStore'

const NoticeCard = (props) => {

  const {user_name , post_id , image_url} = props

  console.log(props)
  return (
    <React.Fragment>
      <Grid _onClick = {()=>{history.push(`/detail/${post_id}`)}} padding = '16px' is_flex bg = '#FFF'  margin = '8px 0px'>
                        <Grid width = 'auto' margin = '0px 8px 0px 0px'>
                            <Image size = {85} shape = 'square' src = {image_url}/>
                        </Grid>
                        <Grid margin = '0px 0px 0px 20px'>
                            <Text>
                                {/* 특정 글자만 BOLD */}
                                <b>{props.user_name}</b> 님이 게시글을 남겼습니다.
                            </Text>
                        </Grid>
                    </Grid>
    </React.Fragment>
  );
};

NoticeCard.defaultProps = {
 
      image_url: "",
      user_name: "",
      post_id : null,
   
    
  
};

export default NoticeCard;
