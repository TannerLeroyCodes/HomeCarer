import {createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {value: {first_name: "", last_name: "", email: "", password: "", id:""}},
    reducers: {
        login: (state, action) => {
            state.value = action.payload
        },

        logout: (state, action) =>{
         state.value = {
            first_name: "", last_name: "", email: "", password:"", id: ""
        }}
    },
});

export const {login, logout} = userSlice.actions;

export default userSlice.reducer;