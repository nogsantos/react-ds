import React, {Component} from 'react';
/**
 * About JSX component
 *
 * @class AboutComponent
 * @extends {Component}
 */
class AboutComponent extends Component {
    /**
     * Rendering
     *
     * @returns
     * @memberof AboutComponent
     */
    render() {
        return (
            <section className="content">
                {this.props.content}
            </section>
        );
    }
}

export default AboutComponent;
