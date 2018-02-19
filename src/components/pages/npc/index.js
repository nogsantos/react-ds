import React from 'react';
import DocumentTitle from 'react-document-title';

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import Title from '../../template/Title';
import Loading from '../../template/Loading';
import {AppConf} from '../../../utils/constants';
import NpcComponent from './NpcComponent';
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
{
    allNpcs {
        id
        name
        class
        version
        information
        coverphoto{
            url
        }
        picture{
            url
        }
    }
}`;
const allNpcsQueryVars = {
    skip: 0,
    first: 4
};
/**
 * Render
 *
 * @param {*} param0
 */
const Npc = ({data: { loading, error, allNpcs }, loadMorePosts }) => {
    return (
        <section>
            <DocumentTitle title={AppConf.name +' » '+params.title} />
            <Title title={params.title} subtitle={params.subtitle} />
            {
                error ? <h1>Error fetching posts!</h1> :
                loading ? <Loading /> : <NpcComponent allNpcs={allNpcs} />
            }
        </section>
    );
};
/**
 * Quering
 */
export default graphql(QUERY, {
    options: {
        variables: allNpcsQueryVars
    }, props: ({ data }) => ({
        data,
        loadMorePosts: () => {
            return data.fetchMore({
                variables: {
                skip: data.allPeople.length
            },
            updateQuery: (previousResult, { fetchMoreResult }) => {
                if (!fetchMoreResult) {
                    return previousResult
                }
                return Object.assign({}, previousResult, {
                    allPeople: [...previousResult.allPeople, ...fetchMoreResult.allPeople]
                })
            }
        })}
    })
})(Npc);
