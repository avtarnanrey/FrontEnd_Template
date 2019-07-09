import * as React from 'react';
import { withRouter } from 'react-router-dom';

interface ScrollToTopProps {
    location: any;
}

interface ScrollToTopState {
    loading: boolean;
    loaded: boolean;
}

class ScrollToTop extends React.Component<ScrollToTopProps, ScrollToTopState> {
    constructor(props: any) {
        super(props);
        this.state = {
            loading: true,
            loaded: false,
        };
    }

    componentDidUpdate(prevProps: any) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
            window.scrollTo(0, 0);
        }
    }

    componentDidMount() {
        window.addEventListener('load', () => {
            this.setState({ loading: false });
            setTimeout(() => this.setState({ loaded: true }), 500);
        });
    }

    render() {
        const { loaded, loading } = this.state;
        return (
            <div>
                {!loaded &&
                    <div className={`load${loading ? '' : ' loaded'}`}>
                        <div className="load__icon-wrap">
                            <svg className="load__icon">
                                <path fill="#4ce1b6" d="M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z" />
                            </svg>
                        </div>
                    </div>
                }
                {
                    this.props.children
                }
            </div>
        )
    }
}

export default withRouter(ScrollToTop as any);
