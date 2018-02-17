import React, {Component} from 'react';
/**
 * Bosses JSX component
 *
 * @class BossesComponent
 * @extends {Component}
 */
class BossesComponent extends Component {
    /**
     * Rendering
     *
     * @returns
     * @memberof BossesComponent
     */
    render() {
        return (
            <section className="content">
                {this.props.content}
            </section>
        );
    }
}

export default BossesComponent;
