import React, {Component} from 'react';
import DocumentTitle from 'react-document-title';
import Title from '../../template/Title';
import {AppConf} from '../../../utils/constants';
import HomeComponent from './HomeComponent';
/**
 * Home component
 *
 * @class Home
 * @extends {Component}
 */
class Home extends Component {
    /**
     * Defining static class params
     */
    static params = {
        title: 'Dark Souls',
        subtitle: 'An action RPG game',
    };

    render(){
        return (
            <section>
                <DocumentTitle title={AppConf.name +' » '+Home.params.title} />
                <Title title={Home.params.title} subtitle={Home.params.subtitle} />
                <HomeComponent />
            </section>
        );
    }
}

export default Home;
