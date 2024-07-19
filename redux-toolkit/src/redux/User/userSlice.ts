import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

interface User {
    id: string;
    url: string;
    width: number;
    height: number;
}

// First, create the thunk
export const fetchAllUsers = createAsyncThunk(
    'users/fetchAllUsers',
    async () => {
        const response = await axios.get('https://api.thecatapi.com/v1/images/search?limit=10&page=1')
        return response.data as User[];
    },
)

export interface UserState {
    entities: User[];
    loading: 'idle' | 'pending' | 'succeeded' | 'failed'
}

const initialState: UserState = {
    entities: [],
    loading: 'idle',
}
// Then, handle actions in your reducers:
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        // standard reducer logic, with auto-generated action types per reducer
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder
            .addCase(fetchAllUsers.pending, (state, action) => {
                state.loading = 'pending'
            })
            .addCase(fetchAllUsers.fulfilled, (state, action) => {
                state.loading = 'succeeded'
                state.entities.push(...action.payload)
            })
            .addCase(fetchAllUsers.rejected, (state, action) => {
                state.loading = 'failed'
            })
    },
})

export default userSlice.reducer