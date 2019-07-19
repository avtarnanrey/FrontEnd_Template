import { combineReducers } from "redux";
import { Action, handleActions } from "redux-actions";

import { StoreUtils } from "../utils/storeUtils";

const { computedActionToPropertyName } = StoreUtils;

import * as actions from "./Actions";
import { WidgetStatus } from "../../models";

const {
    setWidgetStatus,
    setData
} = computedActionToPropertyName(actions);

export default combineReducers({
    widgetStatus: handleActions<any>({
        [setWidgetStatus]: (state, action: Action<any>) => action.payload
    }, WidgetStatus.UPDATING),
    data: handleActions<any>({
        [setData]: (state, action: Action<any>) => action.payload
    }, null)
})