import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  // fething values from "UserContext" file, We will use:-
  const { user } = useContext(UserContext);

  if(!user) return <div>User nahi aya, Please Login</div>

  return <div>Welcome {user.username}</div>

}           
     
export default Profile
