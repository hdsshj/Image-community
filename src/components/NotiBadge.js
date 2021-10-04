import React from "react";
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';

import { realtime } from "../shared/firebase";

import { useSelector } from "react-redux";

const NotiBadge = (props) => {
    const [is_read, setIsRead] = React.useState(true);
    const {_onClick} = props;
    const user_id = useSelector(state => state.user.user.uid)

    const notiCheck = () => {
        const notiDB = realtime.ref(`noti/${user_id}`);
        notiDB.update({read : true})
        _onClick()
    }

    React.useEffect(() => {
        const notiDB = realtime.ref(`noti/${user_id}`);
        notiDB.on('value', (snapshot) => {
            console.log(user_id, snapshot.val())
            if(snapshot.val() === null){
                window.alert('없음용')
                return
            }
            setIsRead(snapshot.val().read)
        });

        return () => notiDB.off()
    }, [])

    return (
        <React.Fragment>
            <Badge  color="secondary" variant="dot" invisible={is_read} onClick = {notiCheck}>
            <NotificationsIcon/>
            </Badge>
        </React.Fragment>
    )
}

NotiBadge.defaultProps = {
    _onClick : () => {}
}

export default NotiBadge;