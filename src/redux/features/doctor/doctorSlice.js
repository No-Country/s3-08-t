import { createSlice } from '@reduxjs/toolkit';
import { getDoctors, getDoctorTypes } from './doctorActions';


const initialState = {
    doctors:[],
    doctorTypes:[],
    selectedDoctor:null,
    success: false,
    loading:false,
    error: null,
};

const doctorSlice = createSlice({
    name:'doctor',
    initialState,
    reducers:{
      selectDoctor: (state, action) =>{
        state.selectedDoctor = action.payload;
      }

    },
    extraReducers:{
        [getDoctors.pending]: (state) => {
            state.loading = true
            state.error = null
          },
        [getDoctors.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.success = true 
            state.doctors = payload.doctorData
            
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


export const {selectDoctor} = doctorSlice.actions;
export default doctorSlice.reducer