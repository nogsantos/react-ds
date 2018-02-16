import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/home/index';
import People from '../pages/people/index';
import Npc from '../pages/npc/index';
/**
 * Main Content component
 *
 * @class Content
 * @extends {Component}
 */
class Content extends Component {
    render(){
        return (
            <div className="container">
                <div className="row">
                    <Switch className="col s12 m12 offset-m1 xl12 center-on-small-only">
                        <Route exact path='/' title="Home" component={Home}/>
                        <Route path='/people' component={People}/>
                        <Route path='/npc' component={Npc}/>
                        <Route component={NoMatch} />
                    </Switch>
                </div>
            </div>
        );
    }
}

const NoMatch = ({ location }) => (
    <div>
        <h3>
            404 » <code>{location.pathname}</code>
        </h3>
    </div>
);

export default Content;
