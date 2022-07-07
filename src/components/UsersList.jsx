import React ,{useContext}from 'react'
import { useEffect } from 'react'
import UserContext from '../store/context/UserContext'
import { getAllUser } from '../store/actions/userAction'
const UsersList = () => {
    const {state,dispatch} = useContext(UserContext)
    
    const apicall = async () => {
      getAllUser(dispatch)
    }
    useEffect(()=>{
     apicall()
    },[])
    const {loader,users} = state
   
  return (
    <>
       {loader && <h1>loading..</h1>}
       {!loader && users.map(elem=> <h1> {elem.name} </h1> ) }
    </>
  )
}

export default UsersList