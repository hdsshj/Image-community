import React from "react";

import Header from '../shared/Header'
import Post from "../components/Post";
import { Button, Grid, Input } from "../elements/index";
import CommentIn from "../components/CommentIn";
import CommentList from "../components/CommentList";


const PostDetail = (props) => {
  return (
    <React.Fragment>
        <Grid>
        <Header/>
        </Grid>
        <Grid>
            <Post/>
        </Grid>
        <Grid>
            <CommentIn/>
        </Grid>
        
        <Grid padding = '16px'>
        <CommentList/> 
        </Grid>
    </React.Fragment>
    );
};

export default PostDetail;