import React, { Component } from 'react';
/**
 *
 *
 * @class AppCards
 * @extends {Component}
 */
class AppCards extends Component {
    render(){
        return (
            <div className="row">
                <div className="col s12 m12 l12 xl12">
                    <div className="card">
                        <div className="card-content">
                            <span className="card-title">{this.props.title}</span>
                            {this.props.content}
                        </div>
                        <div className="card-action">
                            <button>Some action</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AppCards;
