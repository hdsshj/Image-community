// PostList.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { actionCreators as postActions } from "../redux/modules/post";
import { history } from "../redux/configureStore";

import Post from "../components/Post";
import { Grid } from "../elements";
import Header from "../shared/Header";
import InfinityScroll from "../shared/InfinityScroll";

const PostList = (props) => {
  const post_list = useSelector((state) => state.post.list);
  const user_info = useSelector((state) => state.user.user);
  const is_loading = useSelector((state) => state.post.is_loading);
  const paging = useSelector((state) => state.post.paging);
  const dispatch = useDispatch();

  console.log(post_list);

  React.useEffect(() => {
    if (post_list.length < 2) {
      dispatch(postActions.getPostFB());
    }
  }, []);

  return (
    <React.Fragment>
      <Grid bg="#EFF6FF" padding= '20px 0px'>
        <Grid>
          {/* <Post/> */}
          <InfinityScroll
            callNext={() => {
              dispatch(postActions.getPostFB(paging.next));
            }}
            is_next={paging.next ? true : false}
            loading={is_loading}
          >
            {post_list.map((l) => {
              // user_info 가 있으면 uid를 반환하고 없으면 null 을 반환한다
              if (l.user_info.user_id === user_info?.uid) {
                return (
                  <Grid
                    bg="#FFF"
                    key={l.id}
                    _onClick={() => {
                      history.push(`/detail/${l.id}`);
                    }}
                  >
                    <Post {...l} is_me />
                  </Grid>
                );
              } else {
                return (
                  <Grid
                    bg="#FFF"
                    key={l.id}
                    _onClick={() => {
                      history.push(`/detail/${l.id}`);
                    }}
                  >
                    <Post {...l} />
                  </Grid>
                );
              }
            })}
          </InfinityScroll>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default PostList;
