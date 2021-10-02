import React from "react";
import styled from "styled-components";

import { Grid, Input, Button } from "../elements/index";

const CommentIn = (props) => {
  return (
    <React.Fragment>
      <Grid is_flex>
      <Input margin="11px" place="댓글 내용을 입력해주세요 :)" />
      <Button crud>수정</Button>
      </Grid>
    </React.Fragment>
  );
};

export default CommentIn;
