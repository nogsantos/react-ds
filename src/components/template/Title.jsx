import React, {Component} from 'react';
/**
 *
 * @class Title
 * @extends {Component}
 */
class Title extends Component {
    /**
     *
     * @returns
     * @memberof Title
     */
    render() {
        return (
            <div className="section grey lighten-5" id="index-banner">
                <div className="row">
                    <div className="col s12 m12 l12 xl12 center-on-small-only">
                        <h1 className="header grey-text text-darken-1">{this.props.title}</h1>
                        <h4 className="header grey-text text-lighten-1">{this.props.subtitle}</h4>
                    </div>
                </div>
            </div>
        );
    }
}

export default Title;
