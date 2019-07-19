import { createAction } from "redux-actions";

export const setWidgetStatus = createAction<any>("SET_WIDGET_STATUS") as (status: any) => ReduxActions.Action<any>;
export const getData = createAction<any>("GET_DATA") as (payload: any) => ReduxActions.Action<any>;
export const setData = createAction<any>("SET_DATA") as (payload: any) => ReduxActions.Action<any>;
export const errorOccured = createAction<any>("ERROR_OCCURED") as (payload: any) => ReduxActions.Action<any>;