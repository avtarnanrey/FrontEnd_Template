import * as React from 'react';
import { Nav } from 'office-ui-fabric-react/lib/Nav';
import { Icon } from 'office-ui-fabric-react/lib/Icon';
import { Link } from "react-router-dom";

const AppDefinition = {
    pages: [
        {
            links: [
                {
                    key: 'Home',
                    name: 'Home',
                    url: '/'
                }
            ]
        },
        {
            links: [
                {
                    key: 'listAds',
                    name: 'List Ads',
                    url: '/listAds'
                },
                {
                    key: 'addNew',
                    name: 'Add New',
                    url: '/singleAd'
                }
            ],
            name: 'Manage Ads'
        }
    ]
};

export default class Navigation extends React.Component<any, any> {
    public render(): JSX.Element {
        return <Nav className="ms-bgColor-neutralLight ms-Grid-row fullHeight" groups={AppDefinition.pages} linkAs={this._onRenderLink} expandButtonAriaLabel={'Expand or collapse'} />;
    }

    private _onRenderLink = (link: any): JSX.Element | null => {
        return (
            <Link className={link.className} style={{ color: 'inherit', boxSizing: 'border-box' }} to={link.href}>
                <span key={1} className="Nav-linkText">
                    {!!link.iconProps && <Icon style={{ margin: '0 4px' }} {...link.iconProps} />}
                    {link.title}
                </span>
            </Link>
        );
    };
}