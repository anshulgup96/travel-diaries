import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchPosts = createAsyncThunk(
  'posts',
  async (_, { signal, rejectWithValue }) => {
    try {
      const response = await fetch('http://localhost:5050/posts', { signal });
      return await response.json();
    } catch (error) {
      if (error.name === 'AbortError') {
        return rejectWithValue('Request was aborted');
      }
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  posts: [],
  isLoading: false,
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.posts.push(...action.payload);
    });
  },
});

export const { setPosts } = postsSlice.actions;

export default postsSlice.reducer;
