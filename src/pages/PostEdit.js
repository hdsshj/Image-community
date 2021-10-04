import React from "react";

import Upload from "../shared/Upload";
import Header from "../shared/Header";
import Post from "../components/Post";
import { Grid, Input, Text, Image, Button } from "../elements/index";
import { history } from "../redux/configureStore";

import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";
import { actionCreators as imageActions } from "../redux/modules/image";

const PostEdit = (props) => {
  const dispatch = useDispatch();
  const params = useParams();

  const is_login = useSelector((state) => state.user.is_login);
  const preview = useSelector((state) => state.image.preview);
  const post_list = useSelector((state) => state.post.list)
  const post_id = props.match.params.id

  const is_edit = post_id? true : false

  const my_post = is_edit ? post_list.find((p) => p.id === post_id) : null;


  //주소에서 id 가져옴
  //주소에 id가 있으면 true

  const [contents, setContents] = React.useState(my_post? my_post.contents : '');


  console.log(my_post)

  React.useEffect(() => {
    if(is_edit && !my_post){
      console.log('포스트 정보가 없어요!')
      history.goBack();
      return;
    }

    if(is_edit){
      dispatch(imageActions.setPreview(my_post.image_url))
    }
  }, [])

  const { history } = props;

  const changeContents = (e) => {
    setContents(e.target.value);
    console.log(e.target.value);
  };

  const addPost = () => {
    dispatch(postActions.addPostFB(contents));
  };

 
  const editPost = () => {
    dispatch(postActions.editPostFB(post_id, {contents : contents}))
  }
 

  

  if (!is_login) {
    return (
      <Grid margin="100px 0px" padding="16px" center>
        <Text size="32px" bold>
          앗! 잠깐!
        </Text>
        <Text size="16px">로그인 후에만 글을 쓸 수 있어요!</Text>
        <Button
          _onClick={() => {
            history.replace("/");
          }}
        >
          로그인 하러가지
        </Button>
      </Grid>
    );
  }
  return (
    <React.Fragment>
      <Grid padding="16px">
        <Text subject size="38px" bold>
          {is_edit ? '게시글 수정' : '게시글 작성'}
        </Text>
      </Grid>
      <Grid padding="0px 16px">
        <Upload />
        <Text size="23px" bold>
          미리보기
        </Text>
      </Grid>
      <Grid>
        <Image shape="rectangle" src={preview ? preview : 'https://i0.wp.com/www.lumosmarketing.io/wp-content/uploads/2019/04/placeholder-image.jpg?resize=360%2C300&ssl=1'}></Image>
      </Grid>
      <Grid padding="16px">
        <Input value = {contents} _onChange={changeContents} textarea place="게시글 작성">
          게시글 내용
        </Input>
      </Grid>
      <Grid padding="16px">
        {is_edit ? (<Button _onClick={editPost}>게시글 수정</Button>) : (<Button _onClick={addPost}>게시글 작성</Button>)}
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
