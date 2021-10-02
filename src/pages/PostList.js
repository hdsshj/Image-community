// PostList.js
import React from "react";

import Post from "../components/Post";
import { Grid } from "../elements";
import Header from "../shared/Header";

const PostList = (props) => {

    return (
        <React.Fragment> 
            <Header join />
            <Grid>
                <Post/>
            </Grid>
            
        </React.Fragment>
    );
};

export default PostList;