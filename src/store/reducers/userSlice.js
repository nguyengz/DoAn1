import { createSlice } from '@reduxjs/toolkit';

const useSlice = createSlice({
    name: 'user',
    initialState: {
        users: {
            allUsers: null,
            isFeching: false,
            error: false
        }
    },
    reducers: {
        getUserStart: (state) => {
            state.users.isFeching = true;
        },
        getUserSuccess: (state, action) => {
            state.users.isFeching = false;
            state.users.allUsers = action.payload;
        },
        getUserFailed: (state) => {
            state.users.isFeching = false;
            state.users.error = true;
        }
    }
});

export const { getUserStart, getUserSuccess, getUserFailed } = useSlice.actions;

export default useSlice.reducer;
