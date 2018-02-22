import React, {Component} from 'react';
import Markdown from 'react-markdown';
/**
 *
 *
 * @class NpcViewComponent
 * @extends {Component}
 */
class NpcViewComponent extends Component{
    /**
     *
     *
     * @returns
     * @memberof NpcViewComponent
     */
    render() {
        return (
            <div className="row">
                <div className="col s12">
                    <p>{this.props.npc.name}</p>
                    <p>{this.props.npc.class}</p>
                    <p>{this.props.npc.drops}</p>
                    <p>{this.props.npc.information}</p>
                    <p>{this.props.npc.notes}</p>
                    <p>
                        {
                            this.props.npc.places.map(place => {
                                return (
                                    <section key={place.id}>
                                        <p>{place.name}</p>
                                        <p>
                                            <Markdown source={place.description} />
                                        </p>
                                    </section>
                                );
                            })
                        }
                    </p>
                </div>
            </div>
        );
    }
}

export default NpcViewComponent;
