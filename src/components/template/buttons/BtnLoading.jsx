import React, {Component} from 'react';

import styled from 'styled-components';

const Button = styled.button`
    width: 90% !important;
`;

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
            <div className="row">
                <div className="col s12 center">
                    <Button className={this.props.className} loading={this.props.loading} onClick={this.props.onClick}>
                    {
                        this.props.loading ? 'Loading...' : 'Load more'
                    }
                    </Button>
                </div>
            </div>
        );
    }
}

export default BtnLoading;
