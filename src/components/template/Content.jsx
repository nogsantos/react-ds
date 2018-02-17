import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';

import DocumentTitle from 'react-document-title';
import Title from './Title';
import {AppConf} from '../../utils/constants';

import Home from '../pages/home/index';
import Npc from '../pages/npc/index';
import Enemies from '../pages/enemies/index';
import Bosses from '../pages/bosses/index';
import Places from '../pages/places/index';
import About from '../pages/about/index';
/**
 * Main Content component
 *
 * @class Content
 * @extends {Component}
 */
class Content extends Component {
    /**
     * Render
     *
     * @returns
     * @memberof Content
     */
    render(){
        return (
            <Switch className="col s12 m12 l12 xl12 center-on-small-only">
                <Route exact path='/' title="Home" component={Home}/>
                <Route path='/npc' component={Npc}/>
                <Route path='/enemies' component={Enemies}/>
                <Route path='/bosses' component={Bosses}/>
                <Route path='/places' component={Places}/>
                <Route path='/about' component={About}/>
                <Route component={NoMatch} />
            </Switch>
        );
    }
}

const NoMatch = ({ location }) => (
    <section>
        <DocumentTitle title={AppConf.name +' » not-found'} />
        <Title title="404" subtitle="Not found" />
        <div className="content">
            Sorry, the resource <code>{location.pathname}</code> was not foud.
        </div>
    </section>
);

export default Content;
