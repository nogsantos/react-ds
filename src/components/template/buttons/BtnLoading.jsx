import React, {Component} from 'react';
/**
 * Default button loading
 *
 * @class BtnLoading
 * @extends {Component}
 */
class BtnLoading extends Component {
    /**
     *
     *
     * @returns
     * @memberof BtnLoading
     */
    render() {
        return (
            <button className={this.props.className} loading={this.props.loading} onClick={this.props.onClick}>
            {
                this.props.loading ? 'Loading...' : 'Load more'
            }
            </button>
        );
    }
}

export default BtnLoading;
