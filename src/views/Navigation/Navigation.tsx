import * as React from 'react';
import { Link, withRouter, RouteComponentProps } from "react-router-dom";
import { connect } from "react-redux";

interface NavigationProps {

}

interface DispatchProps {

}

interface DispatchProps {

}

class Navigation extends React.Component<NavigationProps & DispatchProps> {
    render() {
        return (
            <>
                <Link to="/">
                    <span key={1} className="Nav-linkText">
                        Home
                    </span>
                </Link>
                <Link to="/login">
                    <span key={1} className="Nav-linkText">
                        Login
                    </span>
                </Link>
            </>
        );
    }
}

export default withRouter(connect<NavigationProps, DispatchProps, RouteComponentProps>(
    // Map state to props
    ({ }) => ({}),
    (dispatch) => ({

    })
)(Navigation as any));