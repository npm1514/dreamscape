import React, { Component } from 'react';
import { LandscapingPage } from '../pages';

class Root extends Component {
    render() {
        const { data } = this.props;
        return <LandscapingPage data={data ? data : {}}/>
    }
}

export default Root;