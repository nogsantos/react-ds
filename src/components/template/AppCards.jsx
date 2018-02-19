import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
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
                        <div className="card-image">
                            {
                                this.props.coverphoto ?
                                    <img src={this.props.coverphoto} className="responsive-img" alt=""/> :
                                    <div className="grey lighten-1" style={{height:220}}></div>
                            }
                            <span className="card-title">{this.props.title}</span>
                            {
                                this.props.picture ?
                                <a class="btn-floating halfway-fab waves-effect waves-light white"><img src={this.props.picture} alt=""/></a> :
                                null
                            }
                        </div>
                        <div className="card-content">
                            {this.props.content}
                        </div>
                        {/* <div className="card-action">
                            <Link to={`link/${this.props.path}`}>See</Link>
                        </div> */}
                    </div>
                </div>
            </div>
        );
    }
}

export default AppCards;
