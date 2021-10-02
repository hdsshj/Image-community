import React from "react";

import Header from "../shared/Header";
import Post from "../components/Post";
import { Grid, Input, Text, Image, Button } from "../elements/index";

const PostEdit = (props) => {
  return (
    <React.Fragment>
      <Grid>
        <Header />
      </Grid>
      <Grid padding = '16px'>
        <Text subject size = '38px' bold>게시글 작성</Text>
      </Grid>
      <Grid padding = '0px 16px'>
        <Input type="file" />
      <Text size = '23px' bold>미리보기</Text>
      </Grid>
      <Grid>
        <Image shape="rectangle"></Image>
      </Grid>
      <Grid padding="16px">
        <Input textarea place="게시글 작성">
          게시글 내용
        </Input>
      </Grid>
      <Grid padding="16px">
        <Button>게시글 작성</Button>
      </Grid>
      <Grid></Grid>
    </React.Fragment>
  );
};

PostEdit.defaultProps = {
  user_info: {
    user_name: "wooseok",
    user_profile:
      "https://media.vlpt.us/images/wswj9608/profile/4d70b800-84e2-4ced-ad7d-f71413a6f5a7/KakaoTalk_20210918_153459873.jpg?w=240",
  },
  image_url:
    "https://media.vlpt.us/images/wswj9608/profile/4d70b800-84e2-4ced-ad7d-f71413a6f5a7/KakaoTalk_20210918_153459873.jpg?w=240",
  contents: "간절곶 입니다",
  comment_cnt: 10,
  insert_dt: "2021-09-30 10:00:00",
};

export default PostEdit;
