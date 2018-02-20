import React, {Component} from 'react';

class NpcViewComponent extends Component{
    /**
     *
     *
     * @returns
     * @memberof NpcViewComponent
     */
    render() {
        return (
            <div>
                {
                    this.props.npc.name
                }
            </div>
        );
    }
}

export default NpcViewComponent;
