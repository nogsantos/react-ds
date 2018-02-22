import React, {Component} from 'react';

import Markdown from 'react-markdown';

import Title from '../../template/Title';
import Loading from '../../template/Loading';
/**
 *
 *
 * @class NpcViewComponent
 * @extends {Component}
 */
class NpcViewComponent extends Component {
    /**
     * Creates an instance of NpcViewComponent.
     * @memberof NpcViewComponent
     */
    constructor(){
        super();

        this.state = {
            title: '',
            subtitle: '',
        }
    }

    componentDidMount(){
        this.setState((state, props) => ({
            title: this.props.npc.name,
            subtitle: this.props.npc.class,
        }))
    }

    DataRender = ({props}) => {
        console.log(props);
        return (
            <div className="row">
                    <div className="col s12">
                        <p>{props.npc.name}</p>
                        <p>{props.npc.class}</p>
                        <p>{props.npc.drops}</p>
                        <p>{props.npc.information}</p>
                        <p>{props.npc.notes}</p>
                        <p>
                            {
                                props.npc.places.map(place => {
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

    /**
     *
     *
     * @returns
     * @memberof NpcViewComponent
     */
    render() {
        return (
            <section>
                <Title title={this.state.title} subtitle={this.state.subtitle} />
                {
                    this.props.loading ? <Loading /> : <this.DataRender props={this.props} />
                }
            </section>
        );
    }
}

export default NpcViewComponent;
