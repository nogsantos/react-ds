import React, { Component } from 'react';
import Markdown from 'react-markdown';
/**
 * HomeComponent component
 *
 * @class HomeComponent
 * @extends {Component}
 */
class HomeComponent extends Component {

    content = () => {
        return (
            "## About\n" +
            "Developed by FromSoftware, Dark Souls is the spiritual successor to the Playstation exclusive Demon's Souls, an action RPG experience that surprised by not only gaining critical acclaim, but obtaining publishing in 3 regions and racking estimated sales of over 1 million units."+
            "\n\n"+
            "The original game's appeal lay with its renowned difficulty and trial-and-error approach, one that Dark Souls looked to sustain, thus attracting Demon's Souls' fanbase. The developer and publisher had both stated that there were no intentions for DLC however, following the release of the Prepare to Die Edition for PC with added content, an expansion DLC was released for both PS3 and Xbox360, titled Artorias of the Abyss"+
            "\n\n"+
            "#### Game Summary\n" +
            "This game takes place in the chaotic world where the Dark Ring, a cursed sign of the undead, has appeared. To remove the curse, the main character goes on a pilgrimage to Lordran, where the kings are enshrined. This action role-playing game focuses on the fundamental entertainment of an RPG, such as tense exploration, discovery and fear in meeting monsters. The players will gain a great sense of accomplishment when they manage to make progress in the game."
        );
    }
    /**
     * Rendering
     *
     * @returns
     * @memberof HomeComponent
     */
    render() {
        return (
            <div className="content">
                <Markdown
                    source={this.content()}
                    escapeHtml
                />
            </div>
        );
    }
}

export default HomeComponent;
