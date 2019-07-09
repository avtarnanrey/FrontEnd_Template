import { createAction } from "redux-actions";

export const setWidgetStatus = createAction<number>("SET_WIDGET_STATUS") as (status: number) => ReduxActions.Action<number>;
// export const increment = createAction<number>("INCREMENT") as (count: number) => ReduxActions.Action<number>;
// export const decrement = createAction<number>("DECREMENT") as (count: number) => ReduxActions.Action<number>;