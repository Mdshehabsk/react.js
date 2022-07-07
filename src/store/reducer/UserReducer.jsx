import * as userstype from '../types/userType'

const UserReducer = (state,action) => {
    switch(action.type){
        case userstype.SET_LOADER :
            return {
                ...state,
                loader:true
            }
        case userstype.CLOSE_LOADER :
            return {
                ...state,
                loader:false
            }
        case userstype.SET_USER:
            return {
                ...state,
                users : action.payload
            }
        default:
            return{
                ...state
            }
    }
}

export default UserReducer;