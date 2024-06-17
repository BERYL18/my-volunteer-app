import { createAsyncThunk } from "@reduxjs/toolkit";
import { CreatePost } from "../../api/api";

export const CreatePostAsync = createAsyncThunk(
    "CreatePostAsync",
    async (params:any) => {
        try {   
            const response = await CreatePost(params)
            return response
        } catch (error) {
            console.log(error)
            return {}
        }
    }
)