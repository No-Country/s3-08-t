import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/user/userSlice';
import patientReducer from './features/patient/patientSlice';
export const store = configureStore({
  reducer: {
    user: userReducer,
    patient: patientReducer,
  },
})