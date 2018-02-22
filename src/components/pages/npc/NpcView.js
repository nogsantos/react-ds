import React from 'react';
import DocumentTitle from 'react-document-title';

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import Title from '../../template/Title';
import Loading from '../../template/Loading';
import {AppConf} from '../../../utils/constants';
import NpcViewComponent from './NpcViewComponent';
/**
 * Defining static class params
 */
const params = {
    title: 'NPC',
    subtitle: 'Non-player Character',
};
/**
 * Render
 *
 * @param {*} param0
 */
const NpcView = ({
    hasid,
    data: {
        loading,
        error,
        Npc
    }
}) => {
    return (
        <section>
            <DocumentTitle title={AppConf.name +' » '+params.title} />
            <Title title={params.title} subtitle={params.subtitle} />
            {
                error ? <h1>Error fetching posts!</h1> : loading ? <Loading /> : <NpcViewComponent npc={Npc} />
            }
        </section>
    );
};
/**
 *  Query
 */
const QUERY = gql`
    query Npc($id: ID!) {
        Npc(id: $id) {
            name
            class
            description
            drops
            information
            notes
            places{
                id
                name
                description
            }
            _placesMeta{
                count
            }
        }
}`;
/**
 * Query Conf
 */
const CONFIG_QUERY = {
        options: (props) => ({
            variables: {
                cursor: null,
                id: props.match.params.id,
                skip: 0,
            },
        }),
    };
/**
 * Apollo export
 */
export default graphql(
    QUERY,
    CONFIG_QUERY
)(NpcView);
