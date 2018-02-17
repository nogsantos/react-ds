import React from 'react';

import classNames from 'classnames';

import AppCards from '../../template/AppCards';
import AppCardsActions from '../../template/AppCardsActions';
/**
 * Npc JSX component
 *
 * @class Npc
 * @extends {Component}
 */
class NpcComponent extends React.Component {
    /**
     * Creates an instance of NpcComponent.
     * @param {any} props
     * @memberof NpcComponent
     */
    constructor(props){
        super(props);
        this.state = {
            view: 4,
            togled: false,
        }
        this.actions = [
            {onClick: this.changeDisplay, icon: 'view_list'},
        ];
    }
    /**
     * Chave view display
     *
     * @memberof NpcComponent
     */
    changeDisplay = () => {
        this.setState((prevState, props) => ({
            view: prevState.togled ? 12 : 4,
            togled: !prevState.togled,
        }));
    }
    /**
     * Rendering
     *
     * @returns
     * @memberof NpcComponent
     */
    render() {
        let gridClass = classNames({
            'col': true,
            's12': true,
            'm12 l12 xl12': this.state.togled,
            'm4 l4 xl4': !this.state.togled,
        });
        return (
            <section>
                <AppCardsActions btn={this.actions}/>
                <div className={this.state.togled ? 'container': 'row' }>
                    {
                        this.props.allNpcs.map(npc => {
                            return (
                                <div className={gridClass} key={npc.id}>
                                    <AppCards title={npc.name} content={npc.notes}/>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
            // <section className="content">
            //     <Collapsible popout>
            //     {
            //         this.props.allNpcs.map(npc => (
            //             <CollapsibleItem key={npc.id} header={'DS'+npc.version+' '+npc.name}>
            //                 <div className="row">
            //                     <div className="col s2">
            //                         { npc.picture ? <img src={npc.picture.url} alt="" className="circle responsive-img" /> : '' }
            //                     </div>
            //                     <div className="col s10">
            //                         <p><b>Class:&nbsp;</b>{npc.class}</p>
            //                         <p><b>Location:&nbsp;</b>{
            //                             npc.places ?
            //                             npc.places.map(place => {
            //                                 return place.name;
            //                             }) : ''
            //                         }</p>
            //                         <p><b>Description:&nbsp;</b>{npc.description}</p>
            //                         <p><b>Notes:&nbsp;</b>{npc.notes}</p>
            //                     </div>
            //                 </div>
            //             </CollapsibleItem>
            //         ))
            //     }
            //     </Collapsible>
            // </section>
        );
    }
}

export default NpcComponent;
