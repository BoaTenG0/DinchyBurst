// phoneNumberSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  phoneNumber: "",
  email: "",
};

const phoneNumberSlice = createSlice({
  name: "phone",
  initialState,
  reducers: {
    setPhoneNumber(state, action) {
      state.phoneNumber = action.payload;
    },
    setEmail(state, action) {
      state.email = action.payload;
    },
  },
});

export const { setPhoneNumber, setEmail } = phoneNumberSlice.actions;
export default phoneNumberSlice.reducer;
