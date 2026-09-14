import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import api from '../services/api'

export const login = createAsyncThunk(
  'auth/login',
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const { data } = await api.post('/auth/token/', {
        username,
        password
      })

      localStorage.setItem('access', data.access)
      localStorage.setItem('refresh', data.refresh)

      return { username }
    } catch (error) {
      return rejectWithValue(
        error.response?.data || 'Invalid username or password'
      )
    }
  }
)

export const register = createAsyncThunk(
  'auth/register',
  async ({ username, email, password }, { rejectWithValue }) => {
    try {
      const { data } = await api.post('/auth/register/', {
        username,
        email,
        password
      })

      return data
    } catch (error) {
      return rejectWithValue(
        error.response?.data || 'Registration failed'
      )
    }
  }
)

const slice = createSlice({
  name: 'auth',

  initialState: {
    user: null,
    status: 'idle',
    registerStatus: 'idle',
    error: null
  },

  reducers: {
    logout(state) {
      state.user = null
      localStorage.removeItem('access')
      localStorage.removeItem('refresh')
    }
  },

  extraReducers: builder => {
    builder

      // LOGIN
      .addCase(login.pending, state => {
        state.status = 'loading'
        state.error = null
      })

      .addCase(login.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.user = action.payload
      })

      .addCase(login.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.payload
      })

      // REGISTER
      .addCase(register.pending, state => {
        state.registerStatus = 'loading'
        state.error = null
      })

      .addCase(register.fulfilled, state => {
        state.registerStatus = 'succeeded'
        state.error = null
      })

      .addCase(register.rejected, (state, action) => {
        state.registerStatus = 'failed'
        state.error = action.payload
      })
  }
})

export const { logout } = slice.actions

export default slice.reducer