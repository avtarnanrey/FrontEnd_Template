import { createStore } from "redux";
import Store from "./Store";

const store = createStore(Store, (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__());

export default store;