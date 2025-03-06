import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../models/userEntity";
import { fetchUserData } from "../actions/userActions";

interface UserState {
  userData: User | null; 
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  userData: null,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserData.fulfilled, (state, action: PayloadAction<User>) => {
        state.loading = false;
        state.userData = action.payload; 
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default userSlice.reducer;
