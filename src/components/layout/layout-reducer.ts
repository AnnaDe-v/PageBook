import { Dispatch } from "redux";


const initialState: InitialStateType = {
  status: 'loading'
};

export const layoutReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case "LAYOUT/SET-STATUS":
      return { ...state, status: action.status };
    default:
      return { ...state };
  }
};

export type InitialStateType = {
  status: RequestStatusType
}
export type RequestStatusType = "idle" | "loading" | "succeeded" | "failed";


export const setLayoutStatusAC = (status: RequestStatusType) =>
  ({ type: "LAYOUT/SET-STATUS", status } as const);



export type SetLayoutStatusActionType = ReturnType<typeof setLayoutStatusAC>;


type ActionsType = SetLayoutStatusActionType;
