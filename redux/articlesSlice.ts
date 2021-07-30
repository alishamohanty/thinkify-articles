import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchArticles } from '../utils/api/articles';
import { AxiosResponse } from 'axios';

import { RootState } from './store';

export interface articlesDefaultState {
  articles: [];
  status: 'idle' | 'loading' | 'loaded' | 'error';
  error: string;
}

const initialArticlesState: articlesDefaultState = {
  articles: [],
  status: 'idle',
  error: '',
};

export const getArticlesAsync = createAsyncThunk('thinkify/fetchArticles',
  async () => {
    const response: AxiosResponse = await fetchArticles();
    return response.data.data
  })


export const articlesSlice = createSlice({
  name: 'articles',
  initialState: initialArticlesState,
  reducers: {},
  extraReducers: (builder : any) => {
    builder.addCase(getArticlesAsync.pending, (state:any) => {
      state.status = 'loading';
    });
    builder.addCase(getArticlesAsync.fulfilled, (state : any, { payload }) => {
      state.articles = payload;
      state.status = 'loaded';
    });
    builder.addCase(getArticlesAsync.rejected, (state : any, action) => {
      state.status = 'error';
      state.error = action.error.message
        ? 'action.error.message'
        : 'Error in fetching Articles';
    });
  },
})

export const selectArticles = (state: RootState) => state.articles

export default articlesSlice.reducer