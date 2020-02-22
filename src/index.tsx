import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store"

import { App } from "./App";
import { setWidgetStatus, getData } from "./store/Actions";
import { WidgetStatus } from "../models";

(function () {
    store.dispatch(setWidgetStatus(WidgetStatus.UPDATING));
    store.dispatch(getData("https://jsonplaceholder.typicode.com/todos/1"));
})();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider >,
    document.getElementById("content")
);