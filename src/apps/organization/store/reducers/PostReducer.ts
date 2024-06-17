import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CreatePostAsync } from '../thunks/PostThunks';

interface Post{
    id: string
    comments: Array<any>
    created_at: string
    date: string
    description: string
    image: string
    likes: Array<any>
    title: string
}


interface PostSTate {
  post: Post,
  posts: Array<Post>,
  loading: boolean
}


const initialPost: Post={
    id: "",
    comments: [],
    created_at: "",
    date: "",
    description: "",
    image: "",
    likes: [],
    title: ""
}

const initialState: PostSTate = {
  post: initialPost,
  posts: [],
  loading: false
};

const AuthReducer = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    
  },extraReducers(builder) {
      builder.addCase(CreatePostAsync.pending, (state)=>{
        state.loading = true
      })   
      .addCase(CreatePostAsync.rejected, (state)=>{
        state.loading = false
      })   
      .addCase(CreatePostAsync.fulfilled, (state, action)=>{
        state.loading = false
        state.posts.push(action.payload)
      })   
  },
});

export const {   } = AuthReducer.actions;
export default AuthReducer.reducer;