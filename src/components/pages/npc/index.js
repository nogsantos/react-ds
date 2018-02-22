import React from 'react';
import DocumentTitle from 'react-document-title';

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import Title from '../../template/Title';
import Loading from '../../template/Loading';
import BtnLoading from '../../template/buttons/BtnLoading';
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
 * Defines the page header
 */
const PageHeader = () => {
    return (
        <section>
            <DocumentTitle title={AppConf.name +' » '+params.title} />
            <Title title={params.title} subtitle={params.subtitle} />
        </section>
    );
}
/**
 * Render
 *
 * @param {*} param0
 */
const Npc = ({data: { loading, error, allNpcs, _allNpcsMeta }, loadMorePosts }) => {
    if(error){
        return (
            <section>
                <PageHeader />
                <h1>Error fetching posts!</h1>
            </section>
        );
    }
    if(allNpcs && _allNpcsMeta){
        const areMorePosts = allNpcs.length < _allNpcsMeta.count;
        return (
            <section>
                <PageHeader />
                {
                    <div className="row">
                        <NpcComponent allNpcs={allNpcs} />
                    </div>
                }
                {
                    areMorePosts ?
                    <BtnLoading
                        loading={loading}
                        onClick={() => loadMorePosts()}
                        className="btn green lighten-3" />
                    : ''
                }
            </section>
        );
    }
    return (
        <section>
            <PageHeader />
            <Loading />
        </section>
    );
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
    },
    _allNpcsMeta {
        count
    }
}`;
/**
 * Query configurations
 */
const CONFIG_QUERY = {
    options: {
        variables: {
            skip: 0,
            first: 4
        },
        notifyOnNetworkStatusChange: true
    }, props: ({ data }) => ({
        data,
        loadMorePosts: () => {
            return data.fetchMore(
                {
                variables: {
                    skip: data.allNpcs.length
                },
                updateQuery: (previousResult, { fetchMoreResult }) => {
                    if (!fetchMoreResult) {
                        return previousResult
                    }
                    return Object.assign({}, previousResult, {
                        allNpcs: [
                            ...previousResult.allNpcs,
                            ...fetchMoreResult.allNpcs
                        ]
                    }
                )
            }
        })}
    })
}
/**
 * Quering
 */
export default graphql(
    QUERY,
    CONFIG_QUERY,
)(Npc);
