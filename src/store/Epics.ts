import { combineEpics, ofType } from "redux-observable";
import { mergeMap } from "rxjs/operators";
import req from "../Client";
import * as Actions from "./Actions";

const {
    // setWidgetStatus,
    getData,
    setData,
    errorOccured
} = Actions;

const getDataFromAPI = (action$: any) => action$.pipe(
    ofType(getData.toString()),
    mergeMap((action: ReduxActions.Action<any>) =>
        req(action.payload).then( response =>
            setData(response)
        )
        .catch( (err: Error) => errorOccured(err))
    )
);

export default combineEpics(
    getDataFromAPI
);