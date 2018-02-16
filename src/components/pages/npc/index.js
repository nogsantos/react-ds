import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import DocumentTitle from 'react-document-title';
import Title from '../../template/Title';
import {AppConf} from '../../../utils/constants';
import NpcComponent from './NpcComponent';
/**
 * Defining static class params
 */
const params = {
    title: 'NPC',
    subtitle: 'Non-player Character',
};
const QUERY = gql`
{
    allNpcs {
        id
        name
        class
        description
        notes
        version
        picture {
            url
        }
        places {
            id
            name
            description
        }
    }
}`;
const allPeoplesQueryVars = {
    skip: 0,
    first: 4
};
const Npc = ({data: { loading, error, allNpcs }, loadMorePosts }) => {
    return (
        <section>
            <DocumentTitle title={AppConf.name +' » '+params.title} />
            <Title title={params.title} subtitle={params.subtitle} />
            {
                error ? <h1>Error fetching posts!</h1> :
                loading ? <h1>Loading...</h1> : <NpcComponent allNpcs={allNpcs} />
            }
        </section>
    );
};
/**
 *
 */
export default graphql(QUERY, {
    options: {
        variables: allPeoplesQueryVars
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
