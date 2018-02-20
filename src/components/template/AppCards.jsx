import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

const Title = styled.span`
    background-color: #ffffff;
    width: 100%;
    opacity: 0.6;
    filter: alpha(opacity=60);
    &:hover {
        opacity: .9;
        filter: alpha(opacity=90);
    }
`;

const Image = styled.img`
    opacity: 0.5;
    filter: alpha(opacity=50);
    &:hover {
        opacity: 1;
        filter: alpha(opacity=100);
    }
`;

const Thumb = styled.img`
    border: none;
    max-width: 100px !important;
`;

const NoImage = styled.div`
    height: 180px;
`;

/**
 *
 *
 * @class AppCards
 * @extends {Component}
 */
class AppCards extends Component {
    /**
     *
     *
     * @memberof AppCards
     */
    stringLimit = (text, size) => {
        if(text && text.length > 0){
            let out = text.substring(0, size);
            return text.length > size ? `${out}...`: out;
        } else {
            return '';
        }
    }
    /**
     * Render cover photo
     *
     * @memberof AppCards
     */
    renderCover = img => {
        if(img) {
            return <Image src={img} alt='' />
        } else {
            return <NoImage className="grey lighten-1" />
        }
    }
    /**
     * Render picture photo
     *
     * @memberof AppCards
     */
    renderPicture = img => {
        if(img) {
            return <Thumb src={img} alt='' className="circle responsive-img" />
        }
    }
    /**
     *
     *
     * @returns
     * @memberof AppCards
     */
    render(){
        return (
            <div className="row">
                <div className="col s12 m12 l12 xl12">
                    <div className="card small">
                        <div className="card-image">
                            {this.renderCover(this.props.coverphoto)}
                            <Title className="card-title flow-text grey-text text-darken-4">{`${this.props.title} the ${this.props.class}`}</Title>
                        </div>
                        <div className="card-content">
                            <span className="card-title activator grey-text text-darken-4">DS {this.props.version}<i className="material-icons right">more_vert</i></span>
                            <p>{this.stringLimit(this.props.content, 90)}</p>
                        </div>
                        <div className="card-reveal">
                            <p className="card-title grey-text text-darken-4">{this.props.title}<i className="material-icons right">close</i></p>
                            <div className="row valign-wrapper">
                                <div className="col s4">
                                    {this.renderPicture(this.props.picture)}
                                </div>
                                <div className="col s8">
                                    <span className="black-text">
                                        {this.props.content}
                                        <p className="right"><Link to={`link/${this.props.path}`}>See more</Link></p>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AppCards;
