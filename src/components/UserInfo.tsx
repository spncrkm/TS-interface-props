
import { moreUserInfo } from "../interface/UserInfoProps"



const UserInfo = ({person: {username, age, email}, details}: moreUserInfo) => {
  return (
    <div>
      <h1>User Information</h1>
      <h2>Username: {username}</h2>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
      <p>Details: {details}</p>
    </div>
  )
}

export default UserInfo
