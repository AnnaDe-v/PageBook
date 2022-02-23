import { Dispatch } from "redux";

const initialState: InitialStateType = {
    isLoading: false
};

export type InitialStateType = {
    isLoading: boolean;
}


export const layoutReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "LAYOUT/SET-LOADING_STATUS":
            return { ...state, isLoading: action.isLoading };
        default:
            return { ...state };
    }
};


export const setLoadingStatusAC = (isLoading: boolean) =>
    ({ type: "LAYOUT/SET-LOADING_STATUS", isLoading } as const);

export type setLoadingStatus = ReturnType<typeof setLoadingStatusAC>

type ActionsType = setLoadingStatus;