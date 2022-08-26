import { createSlice } from '@reduxjs/toolkit';
import { loginUser } from './userActions';




const initialState = {
    userInfo: {},
    sesionInfo:{},
    userToken: null,
    success: false,
    loading:false,
    error: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{

    },
    extraReducers:{
        
    [loginUser.pending]: (state) => {
        state.loading = true
        state.error = null
      },
    [loginUser.fulfilled]: (state, { payload }) => {
        state.loading = false
        state.success = true 
        state.sesionInfo = payload
        state.userToken = payload.token
      },
    [loginUser.rejected]: (state, { payload }) => {
        state.loading = false
        state.error = payload
        state.userToken= null
      },

    


    }

});

export default userSlice.reducer;