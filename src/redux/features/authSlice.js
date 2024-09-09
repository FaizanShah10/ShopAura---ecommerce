import { createSlice } from '@reduxjs/toolkit';

const loadUserFromLocalStorage = () => {
  try {
    const storedUser = localStorage.getItem('user');
    if (storedUser === null) {
      return { user: null };
    } else {
      return { user: JSON.parse(storedUser) }; // Parse the stored user data
    }
  } catch (error) {
    return { user: null }; // Return null if parsing fails
  }
};

const initialState = loadUserFromLocalStorage();

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user; 
      localStorage.setItem('user', JSON.stringify(state.user)); // Store in localStorage
    },
    removeUser: (state) => {
      state.user = null;
      localStorage.removeItem('user');
    }
  }
});

export const { setUser, removeUser } = authSlice.actions;
export default authSlice.reducer;
