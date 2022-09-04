import { createSlice } from '@reduxjs/toolkit';
import { registerInquiry } from './inquiryActions';




const initialState = {
    inquiryInfo:{},
    inquiries:[],
    selectedSpeciality:null,
    success: false,
    loading:false,
    error: null,
};

const inquirySlice = createSlice({
    name: 'inquiry',
    initialState,
    reducers:{
        selectSpeciality: (state, action) =>{
            state.selectedSpeciality = action.payload
        }

    },
    extraReducers:{
        
    [registerInquiry.pending]: (state) => {
        state.loading = true
        state.error = null
      },
    [registerInquiry.fulfilled]: (state, { payload }) => {
        state.loading = false
        state.success = true 
        state.inquiries = payload
        
      },
    [registerInquiry.rejected]: (state, { payload }) => {
        state.loading = false
        state.error = payload
        
      },

    }

});
export const {selectSpeciality} = inquirySlice.actions;
export default inquirySlice.reducer; 