import React from "react";
import { useSelector } from "react-redux";
import { deleteCookie } from "./cookie";
import { apiKey } from "./firebase";

const Permit = (props) => {
  const is_login = useSelector((state) => state.user.is_login);
  const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;
  const is_session = sessionStorage.getItem(_session_key) ? true : false;
  React.useEffect(()=>{
  console.log(is_session,'로그인 뜨냐',is_login);
    
  },[])

  if (is_session && is_login) {
    return <React.Fragment>{props.children}</React.Fragment>;
    
  }
  return null;
};

export default Permit;
