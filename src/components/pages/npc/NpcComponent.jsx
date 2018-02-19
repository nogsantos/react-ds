import React from 'react';

import classNames from 'classnames';
import InfiniteScroll from 'react-infinite-scroller'

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
            {
                onClick: this.changeDisplay,
                icon: 'view_list',
                iconTitle: 'List',
            },
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
    more = () => {

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
        this.actions[0].icon = !this.state.togled ? 'view_list' : 'view_quilt';
        this.actions[0].iconTitle = !this.state.togled ? 'List' : 'Grid';

        let items = [];
        const loader = <div key={0} className="loader">Loading ...</div>;
        this.props.allNpcs.map(npc => {
            return items.push(
                <div className={gridClass} key={npc.id}>
                    <AppCards
                        className={gridClass}
                        key={npc.id}
                        title={npc.name}
                        picture={npc.picture ? npc.picture.url : null}
                        coverphoto={npc.coverphoto ? npc.coverphoto.url : null}
                        content={npc.information} />
                </div>
            )
        })

        return (
            <section>
                <AppCardsActions btn={this.actions}/>
                    <InfiniteScroll
                        pageStart={0}
                        loadMore={this.more}
                        hasMore={true}
                        loader={loader}
                        useWindow={false}>
                        <div className={this.state.togled ? 'container': 'row' }>
                            {items}
                        </div>
                    </InfiniteScroll>
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
