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
    render() {
        return (
            <section className="app-container" id="index-banner">
                <header>
                    <Nav />
                </header>
                <main>
                    <Content />
                </main>
                <footer className="page-footer docs-footer">
                    <Footer />
                </footer>
            </section>
        );
    }
}

export default App;
