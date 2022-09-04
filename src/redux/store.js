import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/user/userSlice';
import patientReducer from './features/patient/patientSlice';
import doctorReducer from './features/doctor/doctorSlice';
import inquiryReducer from './features/inquiry/inquirySlice';
export const store = configureStore({
  reducer: {
    user: userReducer,
    patient: patientReducer,
    doctor: doctorReducer,
    inquiry: inquiryReducer,
  },
})