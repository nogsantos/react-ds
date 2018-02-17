import React, {Component} from 'react';
import { Link } from 'react-router-dom';
/**
  *
 * @class Nav
 * @extends {Component}
 */
class Nav extends Component {
    /**
     * Creates an instance of Nav.
     * @memberof Nav
     */
    constructor(){
        super();
        this.menu = [
            {
                path: '/',
                title: 'Home'
            },
            {
                path: '/npc',
                title: 'Npc\'s'
            },
            {
                path: '/enemies',
                title: 'Enemies'
            },
            {
                path: '/bosses',
                title: 'Bosses'
            },
            {
                path: '/places',
                title: 'Places'
            },
            {
                path: '/about',
                title: 'About'
            },
        ];
    }
    /**
     * An example for colapse menu item
     *
     * @memberof Nav
     */
    Collapsible = ({i}) => {
        return (
            <li>
                <ul className="collapsible collapsible-accordion">
                    <li>
                        <a className="collapsible-header">Colapsible {i}</a>
                        <div className="collapsible-body">
                            <ul>
                                <li><a href="">Link 1</a></li>
                                <li><a href="">Link 2</a></li>
                                <li><a href="">Link 3</a></li>
                                <li><a href="">Link ...</a></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </li>
        )
    }
    /**
     *
     * @returns
     * @memberof Nav
     */
    render(){
        return (
            <section className="sidenav sidenav-fixed grey lighten-5">
                <ul>
                    <li className="logo">
                        <div id="logo-container" className="brand-logo">
                            <img src="./assets/img/logo.png" className="responsive-img" alt="Paise the sun" title="Paise the sun" width="150"/>
                        </div>
                    </li>
                    {/* <this.Collapsible i={1} /> */}
                    {
                        this.menu.map(menu => {
                            return (
                                <li key={menu.path}><Link to={menu.path}>{menu.title}</Link></li>
                            )
                        })
                    }
                </ul>
                <div className="sidenav-footer grey lighten-5">
                    <div className="row">
                        <div className="col s12">
                            some info...
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Nav;
