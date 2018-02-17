import React from 'react';

// import { graphql } from 'react-apollo';
// import gql from 'graphql-tag';

import DocumentTitle from 'react-document-title';
import Title from '../../template/Title';
import {AppConf} from '../../../utils/constants';
import PlacesComponent from './PlacesComponent';
/**
 * Defining static class params
 */
const params = {
    title: 'Places',
    subtitle: 'Game Places',
};
// const QUERY = gql`
// {

// }`;
const Places = () => {
    return (
        <section>
            <DocumentTitle title={AppConf.name +' » '+params.title} />
            <Title title={params.title} subtitle={params.subtitle} />
            <PlacesComponent content="Soon..." />
        </section>
    );
};

export default Places;
