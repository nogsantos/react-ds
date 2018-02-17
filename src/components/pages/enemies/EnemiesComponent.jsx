import React, {Component} from 'react';
/**
 * Enemies JSX component
 *
 * @class EnemiesComponent
 * @extends {Component}
 */
class EnemiesComponent extends Component {
    /**
     * Rendering
     *
     * @returns
     * @memberof EnemiesComponent
     */
    render() {
        return (
            <section className="content">
                {this.props.content}
            </section>
        );
    }
}

export default EnemiesComponent;
