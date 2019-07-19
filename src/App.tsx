import * as React from "react";
import { connect } from "react-redux";
import { BrowserRouter } from 'react-router-dom'

import { AppProps, WidgetStatus, StoreState } from "../models"

import Main from "./views";

const AppComponenet: React.StatelessComponent<AppProps> = ({
    widgetStatus
}) => (<>
    {((status: WidgetStatus) => {
        switch (status) {
            case WidgetStatus.UPDATING:
            case WidgetStatus.RENDERED:
                return (
                    <BrowserRouter>
                        <Main />
                    </BrowserRouter>
                )
            case WidgetStatus.ERROR:
                return "Widget Error";
            default:
                return null;
        }
    })(widgetStatus)}
</>
    );

export const App = connect<AppProps>(
    ({ widgetStatus }: StoreState) => ({
        widgetStatus
    })
)(AppComponenet)