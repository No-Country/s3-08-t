import { createSlice } from '@reduxjs/toolkit';
import { getDoctors, getDoctorTypes } from './doctorActions';


const initialState = {
    doctors:[],
    doctorTypes:[],
    success: false,
    loading:false,
    error: null,
};

const doctorSlice = createSlice({
    name:'doctor',
    initialState,
    reducers:{

    },
    extraReducers:{
        [getDoctors.pending]: (state) => {
            state.loading = true
            state.error = null
          },
        [getDoctors.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.success = true 
            state.doctors = payload.userDoctor
            
          },
        [getDoctors.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
            
          },

          [getDoctorTypes.pending]: (state) => {
            state.loading = true
            state.error = null
          },
        [getDoctorTypes.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.success = true 
            state.doctorTypes = payload.doctorData
            
          },
        [getDoctorTypes.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
            
          },
    
    

    }
})



export default doctorSlice.reducer