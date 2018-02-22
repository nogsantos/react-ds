import React from 'react';
import DocumentTitle from 'react-document-title';

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

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
            {
                error ? <h1>Error fetching posts!</h1> : <NpcViewComponent npc={Npc} loading={loading} />
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
            picture{
                url
            }
            coverphoto{
                url
            }
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
