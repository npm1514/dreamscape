import React, { Component } from 'react';
import { GardensPage } from '../pages';

class Root extends Component {
    render() {
        const { data } = this.props;
        return <GardensPage data={data ? data : {}}/>
    }
}

export default Root;