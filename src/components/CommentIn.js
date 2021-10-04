import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { actionCreators as commentActions } from "../redux/modules/comment";
import { Grid, Input, Button } from "../elements/index";

const CommentIn = (props) => {
  const [comment_text, setCommentText] = React.useState("");
  const dispatch = useDispatch();
  const onChange = (e) => {
    setCommentText(e.target.value);
  };

  const { post_id } = props;
  const write = () => {
    dispatch(commentActions.addCommentFB(post_id, comment_text));
    setCommentText("");
  };

  return (
    <React.Fragment>
      <Grid padding="16px" is_flex>
        <Input
          is_submit
          value={comment_text}
          onSubmit={write}
          place="댓글 내용을 입력해주세요 :)"
          _onChange={onChange}
        />
        <Button width="60px" margin="0px 0px 0px 4px" _onClick={write} crud>
          입력
        </Button>
      </Grid>
    </React.Fragment>
  );
};

export default CommentIn;
