import React from "react";
import styled from "styled-components";
import {useSelector} from 'react-redux'

import { Image, Text, Button, Grid } from "../elements/index";



const CommentList = (props) => {
    const user_name = useSelector((state) => state.user.user? state.user.user.user_name : '')
    console.log(props.comment_list,user_name)
  return (
    <React.Fragment>
      {props.comment_list.map((l, i) => {
          if(props.comment_list[i].user_name === user_name){
            return (
            
                <Grid key={i} is_flex>
                  <Image />
                  <Text>{l.user_name}</Text>
                  <Text>{l.comment}</Text>
                  <Button crud>삭제</Button>
                </Grid>
              );
          }
        return (
            
          <Grid key={i} is_flex>
            <Image />
            <Text>{l.user_name}</Text>
            <Text>{l.comment}</Text>
          </Grid>
        );
      })}
    </React.Fragment>
  );
};

CommentList.defaultProps = {
  comment_list: [
    {
      user_profile: "",
      user_name: "wooseok",
      comment: "와 너무 예뻐요",
    },
    {
      user_profile: "",
      user_name: "nick",
      comment: "와 너무 멋져요",
    },
    {
      user_profile: "",
      user_name: "n2br",
      comment: "까악",
    },
  ],
  bg: "#DDD",
};

export default CommentList;
