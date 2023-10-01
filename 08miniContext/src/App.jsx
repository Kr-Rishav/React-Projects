import './App.css'
import Login from './Component/Login'
import Profile from './Component/Profile'
import UserContextProvider from './context/userContextProvider'



function App() {


  return (

    <UserContextProvider>

      <Login/>
      <Profile/>

    </UserContextProvider> 
   
  )
} 

export default App
