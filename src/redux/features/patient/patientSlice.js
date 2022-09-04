
import { createSlice } from '@reduxjs/toolkit';
import { getPatients, registerPatient } from './patientActions';




const initialState = {
    patientInfo:{},
    patients:[],
    selectedPatient:null,
    success: false,
    loading:false,
    error: null,
};

const patientSlice = createSlice({
    name: 'patient',
    initialState,
    reducers:{
      selectPatient: (state, action ) => {
        state.selectedPatient = action.payload;
      }
    },
    extraReducers:{
        
    [registerPatient.pending]: (state) => {
        state.loading = true
        state.error = null
      },
    [registerPatient.fulfilled]: (state, { payload }) => {
        state.loading = false
        state.success = true 
        state.patientInfo = payload.patient
        
      },
    [registerPatient.rejected]: (state, { payload }) => {
        state.loading = false
        state.error = payload
        
      },

      [getPatients.pending]: (state) => {
        state.loading = true
        state.error = null
      },
    [getPatients.fulfilled]: (state, { payload }) => {
        state.loading = false
        state.success = true 
        state.patients = payload.patientData
        
      },
    [getPatients.rejected]: (state, { payload }) => {
        state.loading = false
        state.error = payload
        
      },

    }

});

export const {selectPatient} = patientSlice.actions;
export default patientSlice.reducer; 