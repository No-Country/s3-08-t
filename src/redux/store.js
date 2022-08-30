import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/user/userSlice';
import patientReducer from './features/patient/patientSlice';
import doctorReducer from './features/doctor/doctorSlice';
export const store = configureStore({
  reducer: {
    user: userReducer,
    patient: patientReducer,
    doctor: doctorReducer
  },
})