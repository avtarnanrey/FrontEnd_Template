import * as React from "react";
import { withRouter, RouteComponentProps } from "react-router";
import { connect } from "react-redux";

interface LoginProps {

}

interface DispatchProps {

}

class Login extends React.Component<LoginProps, {}> {
    constructor(props: any) {
        super(props);
        console.log(props);
    }

    render() {
        return <>
            <h1>Login</h1>
        </>;
    }
}

export default withRouter(connect<LoginProps, DispatchProps, RouteComponentProps>(
    // Map state to props
    ({ }) => ({}),
    (dispatch) => ({

    })
)(Login as any));