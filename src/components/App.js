import React, {Component} from 'react';

import Nav from './template/Nav';
import Footer from './template/Footer';
import Content from './template/Content';
/**
 * Defining the template
 *
 * @class App
 * @extends {Component}
 */
class App extends Component {
    /**
     *
     *
     * @memberof App
     */
    componentDidMount() {
        /*
         * Detect when scrolled to bottom.
         */
        this.refs.content.addEventListener('scroll', () => {
            let nav = document.getElementById('pageActions');
            if(nav) {
                if(this.refs.content.scrollTop >= 245) {
                    if(nav.getBoundingClientRect().y < 0) {
                        nav.classList.add('fixed-nav-position', 'col', 's12', 'm12', 'l12', 'xl12');
                    }
                } else {
                    nav.classList.remove('fixed-nav-position', 'col', 's12', 'm12', 'l12', 'xl12');
                }
            }
        });
    }
    /**
     *
     *
     * @returns
     * @memberof App
     */
    render() {
        return (
            <article className="app-container" ref="content" style={{ height: "700px", overflow: "auto" }}>
                <header>
                    <Nav />
                </header>
                <main>
                    <Content />
                </main>
                <footer className="page-footer docs-footer">
                    <Footer />
                </footer>
            </article>
        );
    }
}

export default App;
