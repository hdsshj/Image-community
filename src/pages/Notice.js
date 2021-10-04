import React from "react";
import { Grid, Image, Button, Text } from "../elements/index";

import NoticeCard from "../components/NoticeCard";

import { realtime } from "../shared/firebase";
import { useSelector, useDispatch } from "react-redux";

const Notice = (props) => {
  const user = useSelector((state) => state.user.user);
  const [noti, setNoti] = React.useState([]);
  console.log(user)
  React.useEffect(() => {
    if (!user) {
      return;
    }

    const notiDB = realtime.ref(`noti/${user.uid}/list`);

    const _noti = notiDB.orderByChild("insert_dt");

    _noti.once("value", snapshot => {
      // snapshop이 있을때에만
      if (snapshot.exists()) {
        let _data = snapshot.val();
        console.log(_data);
        let _noti_list = Object.keys(_data)
          .reverse()
          .map((s) => {
            return _data[s];
          });
          console.log(_noti_list)
        setNoti(_noti_list);
      }
    });
  }, [user]);
  return (
    <React.Fragment>
      <Grid padding="16px" bg="#EFF6FF">
        {noti.map((l, idx) => {
          return <NoticeCard key={`noti_${idx}`} {...l} />;
        })}
      </Grid>
    </React.Fragment>
  );
};

export default Notice;
