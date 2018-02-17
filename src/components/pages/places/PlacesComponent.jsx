import React, {Component} from 'react';
/**
 * Places JSX component
 *
 * @class PlacesComponent
 * @extends {Component}
 */
class PlacesComponent extends Component {
    /**
     * Rendering
     *
     * @returns
     * @memberof PlacesComponent
     */
    render() {
        return (
            <section className="content">
                {this.props.content}
            </section>
        );
    }
}

export default PlacesComponent;
