import React from 'react';
import DocumentTitle from 'react-document-title';

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import InfiniteScroll from 'react-infinite-scroller'

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
query allNpcs($first: Int!, $skip: Int!) {
    allNpcs(orderBy: createdAt_DESC, first: $first, skip: $skip){
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
    },
    _allNpcsMeta {
        count
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
const Npc = ({data: { loading, error, allNpcs, _allNpcsMeta }, loadMorePosts }) => {
    const loader = <div key={0} className="loader">Loading ...</div>;
    const areMorePosts = loading ? false : allNpcs.length < _allNpcsMeta.count;
    return (
        <section>
            <DocumentTitle title={AppConf.name +' » '+params.title} />
            <Title title={params.title} subtitle={params.subtitle} />
            {
                error ? <h1>Error fetching posts!</h1> :
                loading ?
                    <Loading /> :
                    <InfiniteScroll
                        pageStart={0}
                        loadMore={loadMorePosts}
                        hasMore={areMorePosts}
                        threshold={2048}
                        useWindow
                        loader={loader}>
                        <div className="row">
                            <NpcComponent allNpcs={allNpcs} />
                        </div>
                </InfiniteScroll>
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
                skip: data.allNpcs.length
            },
            updateQuery: (previousResult, { fetchMoreResult }) => {
                if (!fetchMoreResult) {
                    return previousResult
                }
                return Object.assign({}, previousResult, {
                    allNpcs: [...previousResult.allNpcs, ...fetchMoreResult.allNpcs]
                })
            }
        })}
    })
})(Npc);
