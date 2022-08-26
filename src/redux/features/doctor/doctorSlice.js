import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    doctorId:"",
    doctorName:"",
    doctorType:"",
    avatar: img,
    doctorRating:"",
    experience:"",
    phone:"",
    aboutMe:""
}

const doctrSlice = createSlice({
    name:'doctor',
    initialState,
    reducers:{

    },
    extraReducers:{}
})



export default doctrSlice.reducer