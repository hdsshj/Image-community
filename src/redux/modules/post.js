import { createAction, handleAction, handleActions } from "redux-actions";
import produce, { Produce } from "immer";
import { firestore, storage } from "../../shared/firebase";
import "moment";
import moment from "moment";

import { actionCreators as imageAction } from "./image";

const SET_POST = "SET_POST";
const ADD_POST = "ADD_POST";
const EDIT_POST = "EDIT_POST";
const LOADING = "LOADING";

const setPost = createAction(SET_POST, (post_list, paging) => ({ post_list, paging }));
const addPost = createAction(ADD_POST, (post) => ({ post }));
const editPost = createAction(EDIT_POST, (post_id, post) => ({
  post_id,
  post,
}));
const loading = createAction(LOADING, (is_loading) => ({ is_loading }));

const initialState = {
  list: [],
  paging: { start: null, next: null, size: 3 },
  is_loading: false,
};

const initialPost = {
  // id: 0,
  // user_info: {
  //   user_name: "wooseok",
  //   user_profile:
  //     "https://media.vlpt.us/images/wswj9608/profile/4d70b800-84e2-4ced-ad7d-f71413a6f5a7/KakaoTalk_20210918_153459873.jpg?w=240",
  // },
  image_url:
    "https://media.vlpt.us/images/wswj9608/profile/4d70b800-84e2-4ced-ad7d-f71413a6f5a7/KakaoTalk_20210918_153459873.jpg?w=240",
  contents: "간절곶 입니다",
  comment_cnt: 0,
  insert_dt: moment().format("YYYY-MM-DD hh:mm:ss"),
};

const editPostFB = (post_id = null, post = {}) => {
  return function (dispatch, getState, { history }) {
    if (!post_id) {
      console.log("게시글 정보 없어용");
      return;
    }
    const _image = getState().image.preview;

    const _post_idx = getState().post.list.findIndex((p) => p.id === post_id);
    const _post = getState().post.list[_post_idx];

    console.log(_post);

    const postDB = firestore.collection("post");

    if (_image === _post.image_url) {
      postDB
        .doc(post_id)
        .update(post)
        .then((doc) => {
          dispatch(editPost(post_id, { ...post }));
          history.replace("/");
        });
    } else {
      const user_id = getState().user.user.uid;
      const _upload = storage
        .ref(`images/${user_id}_${new Date().getTime()}`)
        .putString(_image, "data_url");
      _upload.then((snapshot) => {
        snapshot.ref
          .getDownloadURL()
          .then((url) => {
            console.log(url);

            return url;
          })
          .then((url) => {
            // return 값을 체인으로 엮어 사용할 수 있다.
            postDB
              .doc(post_id)
              .update({ ...post, image_url: url })
              .then((doc) => {
                dispatch(editPost(post_id, { ...post, image_url: url }));
                history.replace("/");
              });
          })
          .catch((err) => {
            window.alert("앗! 이미지 업로드에 문제가 있어요!");
            console.log("앗! 이미지 업로드에 문제가 있어요!", err);
          });
      });
    }
  };
};

const addPostFB = (contents = "") => {
  return function (dispatch, getState, { history }) {
    const postDB = firestore.collection("post");
    // state 유저정보 가져옴
    const _user = getState().user.user;
    console.log(_user);
    const user_info = {
      user_name: _user.user_name,
      user_id: _user.uid,
      user_profile: _user.user_profile,
    };

    // initialPost 정보 가져옴
    const _post = {
      ...initialPost,
      contents: contents,
      insert_dt: moment().format("YYYY-MM-DD hh:mm:ss"),
    };

    const _image = getState().image.preview;
    console.log(_image);
    console.log(typeof _image);

    const _upload = storage
      .ref(`images/${user_info.user_id}_${new Date().getTime()}`)
      .putString(_image, "data_url");
    _upload.then((snapshot) => {
      snapshot.ref
        .getDownloadURL()
        .then((url) => {
          console.log(url);

          return url;
        })
        .then((url) => {
          // return 값을 체인으로 엮어 사용할 수 있다.
          postDB
            .add({ ...user_info, ..._post, image_url: url })
            .then((doc) => {
              let post = { user_info, ..._post, id: doc.id, image_url: url };
              dispatch(addPost(post));
              history.replace("/");

              // 이미지 업로드 후 preview null
              dispatch(imageAction.setPreview(null));
            })
            .catch((err) => {
              window.alert("앗! 포스트 작성에 문제가 있어요!");
              console.log("post 작성에 실패했어요!", err);
            });
        })
        .catch((err) => {
          window.alert("앗! 이미지 업로드에 문제가 있어요!");
          console.log("앗! 이미지 업로드에 문제가 있어요!", err);
        });
    });
  };
};

const getPostFB = (start = null, size = 3) => {
  return function (dispatch, getState, { history }) {
    // 현재 페이지 정보를 가져온다
    let _paging = getState().post.paging

    // paging에 start가 있고 next값이 없으면 (다음 게시글이 없다) 그냥 리턴한다.
    if(_paging.start && !_paging.next){
      return;
    }
    dispatch(loading(true));
    const postDB = firestore.collection("post");

    // 다음 목록이 있는지 확인 하기 위해서
    //default size = 3 이지만 4개를 가져와서 확인하고 리덕스에는 3개만 넣는다.
    let query = postDB.orderBy("insert_dt", "desc");
    if(start){
      query = query.startAt(start)
    }

    query
      .limit(size + 1)
      .get()
      .then((docs) => {
        let post_list = [];

        let paging = {
          start : docs.docs[0],
          next : docs.docs.length === size+1? docs.docs[docs.docs.length-1] : null,
          size : size,
        }

        docs.forEach((doc) => {
          // let _post = doc.data();

          // let post = Object.keys(_post).reduce(
          //   (acc, cur) => {
          //     if (cur.indexOf("user_") !== -1) {
          //       return { ...acc, user_info: { ...acc, [cur]: _post[cur] } };
          //     }
          //     return { ...acc, [cur]: _post[cur] };
          //   },
          //   { id: doc.id, user_info: {} }
          // );
          // post_list.push(post);

          let _post = {
            id: doc.id,
            ...doc.data(),
          };

          let post = {
            id: doc.id,
            user_info: {
              user_name: _post.user_name,
              user_profile: _post.user_profile,
              user_id: _post.user_id,
            },
            image_url: _post.image_url,
            contents: _post.contents,
            comment_cnt: _post.comment_cnt,
            insert_dt: _post.insert_dt,
          };
          post_list.push(post);
        });
        post_list.pop();
        dispatch(setPost(post_list, paging));
      });
  };
};

const getOnePostFB = (id) => {
  return function (dispatch, getState, {history}){
    const postDB = firestore.collection("post");
    postDB
      .doc(id)
      .get()
      .then((doc) => {
        console.log(doc);
        console.log(doc.data());

        let _post = doc.data();

        let post = Object.keys(_post).reduce(
          (acc, cur) => {
            if (cur.indexOf("user_") !== -1) {
              return {
                ...acc,
                user_info: { ...acc.user_info, [cur]: _post[cur] },
              };
            }

            return { ...acc, [cur]: _post[cur] };
          },
          { id: doc.id, user_info: {} }
        );
        
        dispatch(setPost([post]))
      });
  }
}

export default handleActions(
  {
    [SET_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list.push(...action.payload.post_list)
        draft.list = draft.list.reduce((acc, cur) => {
          // 중복 값 지우기
          if(acc.findIndex(a => a.id === cur.id) === -1){
            return [...acc, cur];
          }else{
            acc[acc.findIndex(a => a.id === cur.id)] = cur;
            return acc;
          }
        }, [])

        if(action.payload.paging){
          draft.paging = action.payload.paging;

        }

        draft.is_loading = false;
      }),
    [ADD_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list.unshift(action.payload.post);
      }),
    [EDIT_POST]: (state, action) =>
      produce(state, (draft) => {
        // 인덱스를 찾아준다
        let idx = draft.list.findIndex((p) => p.id === action.payload.post_id);
        draft.list[idx] = { ...draft.list[idx], ...action.payload.post };
      }),
    [LOADING]: (state, action) =>
      produce(state, (draft) => {
        draft.is_loading = action.payload.is_loading;
      }),
  },
  initialState
);

const actionCreators = {
  setPost,
  addPost,
  getPostFB,
  editPost,
  addPostFB,
  editPostFB,
  getOnePostFB
};

export { actionCreators };
