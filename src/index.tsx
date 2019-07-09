import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store"

import { App } from "./App";
import { setWidgetStatus } from "./store/Actions";
import { WidgetStatus } from "../modals";

(function () {
    store.dispatch(setWidgetStatus(WidgetStatus.UPDATING));
})();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider >,
    document.getElementById("content")
);