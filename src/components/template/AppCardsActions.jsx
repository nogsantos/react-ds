import React, { Component } from 'react';
import {Icon} from 'react-materialize';
/**
 *
 *
 * @class AppCardsActions
 * @extends {Component}
 */
class AppCardsActions extends Component {
    /**
     *
     *
     * @returns
     * @memberof AppCardsActions
     */
    render() {
        return (
            <div className="rows">
                <div className="col s12 m12 l12 xl12">
                    <nav className="grey lighten-5">
                        <div className="nav-wrapper">
                            <ul className="right hide-on-med-and-down">
                                {
                                    this.props.btn.map((action, i) => {
                                        return (
                                            <li key={i}>
                                                <a className="btn-flat" onClick={action.onClick}>
                                                    {
                                                        action.icon ? <Icon medium>{action.icon}</Icon> : ''
                                                    }
                                                    {
                                                        action.title ? action.title : ''
                                                    }
                                                </a>
                                            </li>
                                        );
                                    })
                                }
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        );
    }
}

export default AppCardsActions;
