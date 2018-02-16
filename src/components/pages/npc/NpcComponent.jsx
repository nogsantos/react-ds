import React from 'react';
import {Collapsible, CollapsibleItem} from 'react-materialize';
/**
 * Npc JSX component
 *
 * @class Npc
 * @extends {Component}
 */
class NpcComponent extends React.Component {
    /**
     * Rendering
     *
     * @returns
     * @memberof NpcComponent
     */
    render() {
        return (
            <section className="content">
                <Collapsible popout>
                {
                    this.props.allNpcs.map(npc => (
                        <CollapsibleItem key={npc.id} header={'DS'+npc.version+' '+npc.name}>
                            <div className="row">
                                <div className="col s2">
                                    { npc.picture ? <img src={npc.picture.url} alt="" className="circle responsive-img" /> : '' }
                                </div>
                                <div className="col s10">
                                    <p><b>Class:&nbsp;</b>{npc.class}</p>
                                    <p><b>Location:&nbsp;</b>{
                                        npc.places ?
                                        npc.places.map(place => {
                                            return place.name;
                                        }) : ''
                                    }</p>
                                    <p><b>Description:&nbsp;</b>{npc.description}</p>
                                    <p><b>Notes:&nbsp;</b>{npc.notes}</p>
                                </div>
                            </div>
                        </CollapsibleItem>
                    ))
                }
                </Collapsible>
            </section>
        );
    }
}

export default NpcComponent;
