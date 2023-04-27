import { IAction, IState } from "../types";
import { ADD_TO_FAVORITES, DELETE_FROM_FAVORITES } from "./actionTypes";

const initialState: IState = {
    postsId: [],
};

const postsReducer = (state: IState = initialState, action: IAction) => {
    const { type, payload } = action;
    switch (type) {
        case ADD_TO_FAVORITES:
            return { ...state, postsId: [...state.postsId, payload] };
        case DELETE_FROM_FAVORITES:
            return {
                ...state,
                postsId: state.postsId.filter((id: number): boolean => id !== payload),
            };
        default:
            return state;
    }
};

export default postsReducer;
