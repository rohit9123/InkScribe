import { createSlice } from '@reduxjs/toolkit'

export interface UserState { 
    name: string;
    email: string;
    id: string;
    token: string;
}

const initialState: UserState = {
  name: '',
  email: '',
  id: '',
  token: '',
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.name = action.payload.name
      state.email = action.payload.email
      state.id = action.payload.id
      state.token = action.payload.token
    },
    clearUser: (state) => {
      state.name = ''
      state.email = ''
      state.id = ''
      state.token = ''
    }
  }
})

export const { setUser, clearUser } = userSlice.actions
export default userSlice.reducer