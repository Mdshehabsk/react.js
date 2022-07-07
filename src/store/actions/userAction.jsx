import * as userstype from '../types/userType'
export const getAllUser = async (dispatch) => {
    try{
        dispatch({type:userstype.SET_LOADER})
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await res.json()
        dispatch({type:userstype.SET_USER,payload:data})
        setTimeout(() => {
          dispatch({type:userstype.CLOSE_LOADER})
        }, 1000);
      }catch(err) {
        dispatch({type:userstype.SET_LOADER})
        console.log(err)
      }
}