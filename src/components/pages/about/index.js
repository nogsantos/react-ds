import React from 'react';

import DocumentTitle from 'react-document-title';
import Title from '../../template/Title';
import {AppConf} from '../../../utils/constants';
import AboutComponent from './AboutComponent';
/**
 * Defining static class params
 */
const params = {
    title: 'About',
    subtitle: 'About this project',
};

const About = () => {
    return (
        <section>
            <DocumentTitle title={AppConf.name +' » '+params.title} />
            <Title title={params.title} subtitle={params.subtitle} />
            <AboutComponent />
        </section>
    );
};

export default About;
