import UserReducer from "../reducer/UserReducer";
import UserContext from "../context/UserContext";
import { useReducer } from "react";



const UserProvider = ({children}) => {
    const initialstate = {
        loader:false,
        users:[]
    }
    const [state,dispatch] = useReducer(UserReducer,initialstate)
  return (
    <>
    <UserContext.Provider value={{state,dispatch}}> {children} </UserContext.Provider>
    </>
  )
}

export default UserProvider