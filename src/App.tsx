
import './App.css'
import Button from './components/Button'
import Card from './components/Card'
import UserInfo from './components/UserInfo'
import { UserInfoProps, moreUserInfo } from './interface/UserInfoProps'



function App() {

  const personInfo: UserInfoProps = {
    username: 'spncrkm',
    age: 5,
    email: 'spncrkm@gmail.com'
  }

  const personDetails: moreUserInfo = {
    person: personInfo,
    details: "He is a gifted young child"
  }

  const handleClick = () => {
    console.log("You clicked the button")
  }


  return (
    <>
      <Card>
      <UserInfo {...personDetails}/>
      <Button buttonClick={handleClick}/>


      </Card>
    </>
  )
}

export default App
