import React from 'react';

// import { graphql } from 'react-apollo';
// import gql from 'graphql-tag';

import DocumentTitle from 'react-document-title';
import Title from '../../template/Title';
import {AppConf} from '../../../utils/constants';
import EnemiesComponent from './EnemiesComponent';
/**
 * Defining static class params
 */
const params = {
    title: 'Enemies',
    subtitle: 'Game enemies',
};
// const QUERY = gql`
// {

// }`;
const Enemies = () => {
    return (
        <section>
            <DocumentTitle title={AppConf.name +' » '+params.title} />
            <Title title={params.title} subtitle={params.subtitle} />
            <EnemiesComponent content="Soon..." />
        </section>
    );
};

export default Enemies;
