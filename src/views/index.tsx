import * as React from "react";
import { connect } from "react-redux";
import { Switch, Route, withRouter } from "react-router-dom";
import { WidgetStatus, StoreState } from "../../models";

import { setWidgetStatus } from "../store/Actions";
import ScrollToTop from "./Sections/ScrollToTop";
import Main from "./Sections/Main";
import Login from "./Login";
import Navigation from "./Navigation";
import TopBar from "./Header/HeaderTop";
import { Footer } from "./Footer";

interface ComponenetProps {

}

class Component extends React.Component<ComponenetProps, any> {
    constructor(props: any) {
        super(props);
        console.log(props);
    }
    componentDidMount() {
        (function widgetStatus() {
            return true;
        })();
    }

    render() {
        return (
            <ScrollToTop>
                <div className="container">
                    <div className="col col-4">
                        <Navigation />
                    </div>
                    <div className="col col-8">
                        <TopBar />
                        <div className="pad-20-left pad-20-right">
                            <Switch>
                                <Route path="/" exact component={Main} />
                                <Route path="/login" component={Login} />
                            </Switch>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <Footer />
                </div>
            </ScrollToTop>
        );
    }
}

export default withRouter(connect(
    // Map state to props
    ({ }: StoreState) =>
        ({}),
    (dispatch) => ({
        widgetStatus: () => dispatch(setWidgetStatus(WidgetStatus.RENDERED))
    })
)(Component as any) as React.ComponentClass<any>);