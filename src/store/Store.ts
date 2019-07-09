import { Action, handleActions } from 'redux-actions';
import { StoreUtils } from "../utils/storeUtils";
import { combineReducers } from "redux";

const { computedActionToPropertyName } = StoreUtils;

import * as actions from "./Actions";
import { WidgetStatus } from '../../modals';

const {
    setWidgetStatus,
    // increment,
    // decrement
} = computedActionToPropertyName(actions);

// const incrementDecrement = handleActions<any>(
//     {
//         [increment]: (state, action) => ({
//             counter: state.counter + action.payload
//         }),

//         [decrement]: (state, action) => ({
//             counter: state.counter - action.payload
//         })
//     }, { counter: 0 });

export default combineReducers({
    widgetStatus: handleActions<any>({
        [setWidgetStatus]: (state, action: Action<any>) => action.payload
    }, WidgetStatus.UPDATING)
});