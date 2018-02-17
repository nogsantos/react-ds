import React from 'react';

// import { graphql } from 'react-apollo';
// import gql from 'graphql-tag';

import DocumentTitle from 'react-document-title';
import Title from '../../template/Title';
import {AppConf} from '../../../utils/constants';
import BossesComponent from './BossesComponent';
/**
 * Defining static class params
 */
const params = {
    title: 'Bosses',
    subtitle: 'Game Bosses',
};
// const QUERY = gql`
// {

// }`;
const Bosses = () => {
    return (
        <section>
            <DocumentTitle title={AppConf.name +' » '+params.title} />
            <Title title={params.title} subtitle={params.subtitle} />
            <BossesComponent content="Soon..." />
        </section>
    );
};

export default Bosses;
