import { Dispatch } from "redux";

const initialState: InitialStateType = {
    status: "idle"
};

export type InitialStateType = {
    status: RequestStatusType;
}
export type RequestStatusType = "idle" | "loading" | "succeeded" | "failed";

export const layoutReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "LAYOUT/SET-LOADING_STATUS":
            return { ...state, status: action.status };
        default:
            return { ...state };
    }
};


export const setLoadingStatusAC = (status: RequestStatusType) =>
    ({ type: "LAYOUT/SET-LOADING_STATUS", status } as const);

export type setLoadingStatus = ReturnType<typeof setLoadingStatusAC>

type ActionsType = setLoadingStatus;