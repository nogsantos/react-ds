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
        places{
          name
          description
        }
        _placesMeta{
          count
        }
    }
}`;

// const GetId = ({ match }) => (match.params.id);

const npcQueryVars = {
    id: 'cjdq2d0m3sns801166abkklm1',
};
/**
 * Render
 *
 * @param {*} param0
 */
const NpcView = ({data: { loading, error, Npc }, loadMorePosts }) => {
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
 * Quering
 */
export default graphql(QUERY, {
    options: {
        variables: npcQueryVars
    }, props: ({ data }) => ({
        data,
        loadMorePosts: () => {
            return data.fetchMore({
                variables: {
                skip: data.Npc.length
            },
            updateQuery: (previousResult, { fetchMoreResult }) => {
                if (!fetchMoreResult) {
                    return previousResult
                }
                return Object.assign({}, previousResult, {
                    Npc: [...previousResult.Npc, ...fetchMoreResult.Npc]
                })
            }
        })}
    })
})(NpcView);
