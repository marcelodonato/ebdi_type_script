import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authStore'; 
import homeReducer from './homeSotre';
import userReducer from './userStore';

const store = configureStore({
  reducer: {
    auth: authReducer,
    home: homeReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 
export default store;
