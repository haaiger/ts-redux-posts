import { AnyAction, configureStore, Reducer } from "@reduxjs/toolkit";
import { IState } from "../types";
import PostsReducer from "./postsReducer";

const store = configureStore({
    reducer: {
        posts: PostsReducer as Reducer<IState, AnyAction>,
    }
})

export default store;
