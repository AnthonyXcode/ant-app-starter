import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { ILoginRequest } from './userType'
import { RootState } from '..'
import { StoreStatus } from '../../../index'


export type UserState = {
  status: StoreStatus
  isLoggedIn: boolean
  persistEmail: string
  persistPassword: string
  plainTextToken?: string
}

export const userLoginApiPost = createAsyncThunk<{ email: string, password: string, plainTextToken: string }, ILoginRequest>('user/api/login', async (payload, { rejectWithValue }) => {
  return {
    email: '',
    password: '',
    plainTextToken: ''
  }
})

const initialState: UserState = {
  status: 'idle',
  isLoggedIn: false,
  persistEmail: '',
  persistPassword: '',
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    resetStatus: (state) => {
      state.status = 'idle'
    },
    resetLogin: (state) => {
      state.status = initialState.status
      state.isLoggedIn = false
      state.plainTextToken = initialState.status
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userLoginApiPost.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(userLoginApiPost.fulfilled, (state, action) => {
        state.status = 'success'
        state.isLoggedIn = true
        state.persistEmail = action.payload.email
        state.persistPassword = action.payload.password
        state.plainTextToken = action.payload.plainTextToken
      })
      .addCase(userLoginApiPost.rejected, (state, action) => {
        state.status = 'failed'
      })
  },
})

export const userActions = userSlice.actions
export const userSeletor = (state: RootState) => state.user
