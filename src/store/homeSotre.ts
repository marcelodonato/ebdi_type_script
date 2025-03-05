import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { homeRepository } from "../repository/homeRepository";
import { Event } from "../models/eventEntity";

interface HomeState {
    data: Event [] | null;
    loading: boolean;
    error: string | null
}

const initialState: HomeState = {
    data: null,
    loading: false,
    error: null,
}

export const fetchHomeData = createAsyncThunk(
    "home/fetchHomeData",
    async (_, { rejectWithValue }) => {
      try {
        const data = await homeRepository.fetchHomeData();
        return data;
      } catch (error: any) {
        return rejectWithValue(error.message);
      }
    }
  );

  const homeSlice = createSlice({
    name: "homeData",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchHomeData.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchHomeData.fulfilled, (state, action) => {
          state.loading = false;
          state.data = action.payload;
        })
        .addCase(fetchHomeData.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload as string;
        });
    },
  });

  export default homeSlice.reducer;