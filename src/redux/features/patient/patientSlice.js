
import { createSlice } from '@reduxjs/toolkit';
import { registerPatient } from './patientActions';




const initialState = {
    name: '',
    address: '',
    city: '',
    country: '',
    dni: '',
    email: '',
    phoneNumber: '',
    success: false,
    loading:false,
    error: null,
};

const patientSlice = createSlice({
    name: 'patient',
    initialState,
    reducers:{

    },
    extraReducers:{
        
    [registerPatient.pending]: (state) => {
        state.loading = true
        state.error = null
      },
    [registerPatient.fulfilled]: (state, { payload }) => {
        state.loading = false
        state.success = true 
        state.sesionInfo = payload
        
      },
    [registerPatient.rejected]: (state, { payload }) => {
        state.loading = false
        state.error = payload
        
      },

    }

});

export default patientSlice.reducer; 