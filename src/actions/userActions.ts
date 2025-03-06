import { createAsyncThunk } from "@reduxjs/toolkit";
import { userRepository } from "../repository/userRepository";

export const fetchUserData = createAsyncThunk(
  'user/fetchUserData',
  async (uid: string, { rejectWithValue }) => {
    try {
      const userData = await userRepository.getUserByUid(uid);
      if (userData) {
        return userData;
      } else {
        throw new Error('Usuário não encontrado');
      }
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
