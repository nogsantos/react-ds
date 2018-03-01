import React, {Component} from 'react';

import styled from 'styled-components';

const Section = styled.section`
    margin: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #000100;
`;

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
            <Section className="content center">
                <img src="/assets/img/bonfire.gif" className="responsive-img" alt="Paise the sun"/>
            </Section>
        );
    }
}

export default AppLoading;
