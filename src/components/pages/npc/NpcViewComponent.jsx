import React, {Component} from 'react';

import Markdown from 'react-markdown';
import styled from 'styled-components';

import Title from '../../template/Title';
import Loading from '../../template/Loading';

const Thumb = styled.img`
    border: none;
    max-width: 100px !important;
    margin: 30%;
`;

const InfoTitle = styled.h5`
    padding-bottom: 3px;
    border-bottom: 1px solid #D7D7D7
`;
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
    constructor(props) {
        super(props);
        this.state = {
            name: 'Loading...',
            npcClass: 'Loading...',
            drops: '',
            information: '',
            notes: '',
            places: {
                id: '',
                name: '',
                description: '',
            },
        };
    }
    /**
     *
     *
     * @memberof NpcViewComponent
     */
    componentWillReceiveProps(){
        this.setState((prevState, props) => {
            return {
                name: props.npc.name,
                npcClass: props.npc.class,
                drops: props.npc.drops,
                information: props.npc.information,
                notes: props.npc.notes,
                places: props.npc.places,
                picture: props.npc.picture,
            };
        });
    }
    /**
     *
     *
     * @memberof NpcViewComponent
     */
    DataRender = () => {
        const {
            drops,
            information,
            notes,
            places,
            picture,
        } = this.state;
        return (
            <div className="row">
                <div className="col s4">
                    {
                        picture.url ? <Thumb src={picture.url} alt="" className="img img-circle responsive-img" width="150"/> : ''
                    }
                </div>
                <div className="col s8">
                    <div className="row">
                        <div className="col s12">
                            <InfoTitle>Notes</InfoTitle>
                            {notes}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12">
                            <InfoTitle>Informations</InfoTitle>
                            {information}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12">
                            <InfoTitle>Drops</InfoTitle>
                            {drops}
                        </div>
                    </div>
                </div>
                <div className="col s12">
                    <div className="row">
                        <div className="col s12">
                            <InfoTitle>Places</InfoTitle>
                            {
                                places.map(place => {
                                    return (
                                        <section key={place.id}>
                                            <p>{place.name}</p>
                                            <Markdown source={place.description} />
                                        </section>
                                    );
                                })
                            }
                        </div>
                    </div>
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
                <Title title={this.state.name} subtitle={this.state.npcClass} />
                {
                    this.props.loading ? <Loading /> : <this.DataRender />
                }
            </section>
        );
    }
}

export default NpcViewComponent;
