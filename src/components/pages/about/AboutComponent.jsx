import React, {Component} from 'react';

import Markdown from 'react-markdown';

import readmePath from './About.md';
/**
 * About JSX component
 *
 * @class AboutComponent
 * @extends {Component}
 */
class AboutComponent extends Component {
    /**
     * Creates an instance of AboutComponent.
     * @memberof AboutComponent
     */
    constructor(){
        super();

        this.state = {
            markdown: '',
        }
    }
    /**
     * Loading the source
     *
     * @memberof AboutComponent
     */
    componentWillMount() {
        fetch(readmePath).then(response => {
            return response.text()
          }).then(text => {
            this.setState({
                markdown: text
            });
        });
    }
    /**
     * Rendering
     *
     * @returns
     * @memberof AboutComponent
     */
    render() {
        return (
            <section className="content">
                <div className="row">
                    <div className="col s12">
                        <Markdown source={this.state.markdown} />
                    </div>
                </div>
            </section>
        );
    }
}

export default AboutComponent;
