import store from "./redux/store";

export interface IPost {
    id: number;
    author: string;
    content: string;
}

export interface IAction {
    type: string,
    payload: any;
}

export interface IState {
    postsId: number[];
}

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;