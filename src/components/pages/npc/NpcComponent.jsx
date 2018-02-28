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
            'm6 l6 xl6': !this.state.togled,
        });
        this.actions[0].icon = !this.state.togled ? 'view_list' : 'view_quilt';
        this.actions[0].iconTitle = !this.state.togled ? 'List' : 'Grid';
        let items = [];
        this.props.allNpcs.map(npc => {
            return items.push(
                <div className={gridClass} key={npc.id}>
                    <AppCards
                        path={`/npc/view/${npc.id}`}
                        className={gridClass}
                        key={npc.id}
                        title={npc.name}
                        class={npc.class}
                        version={npc.version}
                        picture={npc.picture ? npc.picture.url : null}
                        coverphoto={npc.coverphoto ? npc.coverphoto.url : null}
                        content={npc.information} />
                </div>
            )
        });
        return (
            <section>
                <AppCardsActions btn={this.actions}/>
                {items}
            </section>
        );
    }
}

export default NpcComponent;
