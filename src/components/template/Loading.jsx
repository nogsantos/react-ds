import React, {Component} from 'react';
import {ProgressBar} from 'react-materialize';
/**
 *
 * @class AppLoading
 * @extends {Component}
 */
class AppLoading extends Component {
    /**
     *
     * @returns
     * @memberof AppLoading
     */
    render() {
        return (
            <section className="content">
                <ProgressBar />
            </section>
        );
    }
}

export default AppLoading;
