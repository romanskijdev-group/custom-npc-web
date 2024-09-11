import { AuthState } from './interface';
import { createSlice } from '@reduxjs/toolkit';

const initialState: AuthState = {
    user: [],
    isLoggedIn: false,
    loading: false,
    error: null
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setIsAuthenticated: (state, action) => {
            state.isLoggedIn = action.payload;
        },
    }
    /*,
    extraReducers: (builder) => {
        builder
            .addCase(authAsync.pending, (state) => {
                state.loading = true;
            })
            .addCase(authAsync.fulfilled, (state, action) => {
                state.user = action.payload;
                state.loading = false;
            });
    }
    */

});

export const { setIsAuthenticated } = authSlice.actions;
export default authSlice.reducer;
