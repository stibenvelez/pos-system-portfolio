import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [],
    user: {},
    loading: false,
    error: false
};

export const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        setGetAllUsers: (state, action) => {
            state.loading = true;
            state.error = false;
        },
        setGetAllUsersSuccess: (state, action) => {
            state.loading = false;
            state.users = action.payload;
            state.error = false;
        },
        setGetAllUsersError: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        setGetUserById: (state, action) => {
            state.loading = true;
            state.error = false;
        },
        setGetUserByIdSuccess: (state, action) => {
            state.loading = false;
            state.user = action.payload;
            state.error = false;
        },
        setGetUserByIdError: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        setUpdateUser: (state, action) => {
            state.loading = true;
            state.error = false;
        },
        setUpdateUserSuccess: (state, action) => {
            state.loading = false;
            state.error = false;
        },
        setUpdateUserError: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        setUpdatePassword: (state, action) => {
            state.loading = true;
            state.error = false;
        },
        setUpdatePasswordSuccess: (state, action) => {
            state.loading = false;
            state.error = false;
        },
        setUpdatePasswordError: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
    }
});

export const {
    setGetAllUsers,
    setGetAllUsersSuccess,
    setGetAllUsersError,
    setGetUserById,
    setGetUserByIdSuccess,
    setGetUserByIdError,
    setUpdateUser,
    setUpdateUserSuccess,
    setUpdateUserError,
    setUpdatePassword,
    setUpdatePasswordSuccess,
    setUpdatePasswordError
} = usersSlice.actions;

export default usersSlice.reducer;
