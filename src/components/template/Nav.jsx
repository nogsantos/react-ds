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
     *
     * @returns
     * @memberof Nav
     */
    render(){
        return (
            <ul className="sidenav sidenav-fixed grey lighten-5">
                <li className="logo">
                    <div id="logo-container" className="brand-logo">
                        <img src="./assets/img/logo.png" alt="Paise the sun" width="150"/>
                    </div>
                </li>
                {
                    this.menu.map(menu => {
                        return (
                            <li key={menu.path}><Link to={menu.path}>{menu.title}</Link></li>
                        )
                    })
                }
            </ul>

        );
    }
}

export default Nav;
