import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";

import Header from "../shared/Header";
import Post from "../components/Post";
import { Button, Grid, Input } from "../elements/index";
import CommentIn from "../components/CommentIn";
import CommentList from "../components/CommentList";

import Permit from "../shared/Permit";

const PostDetail = (props) => {
  const dispatch = useDispatch()
  const id = props.match.params.id;

  const user_info = useSelector((state) => state.user.user);

  const post_list = useSelector((store) => store.post.list);
  const post_idx = post_list.findIndex((p) => p.id === id);
  const post = post_list[post_idx];

  React.useEffect(() => {
    if(post){
      return;
    }
    
    dispatch(postActions.getOnePostFB(id))
    
  }, []);

  console.log(post, user_info);


  return (
    <React.Fragment>
      {post && <Post {...post} is_me={post.user_info.user_id === user_info?.uid} />}

      <Permit>
      <CommentIn post_id = {id}/>

      </Permit>
      <CommentList post_id = {id}/>
    </React.Fragment>
  );
};

export default PostDetail;
