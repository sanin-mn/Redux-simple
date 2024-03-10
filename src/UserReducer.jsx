import { createSlice } from "@reduxjs/toolkit";
import { userList } from "./Data";

const userSlice = createSlice({
    name:"users",
    initialState:userList,
    reducers:{
        addUser: (state,action)=>{
            state.push(action.payload)
            console.log(action);
        },
        editUser:(state,action)=>{
            const {id,name,email} = action.payload
            const updatingUser = state.find(user =>user.id == id)
            if(updatingUser){
                updatingUser.name = name;
                updatingUser.email = email;
            }
        },
        deleteUser:(state,action)=>{
            const {id} = action.payload
            const deletingUser = state.find (user => user.id)
            if(deletingUser){
                return state.filter(f=> f.id !== id)
            }       
        }
    }
})


export const {addUser,editUser,deleteUser} = userSlice.actions
export default userSlice.reducer