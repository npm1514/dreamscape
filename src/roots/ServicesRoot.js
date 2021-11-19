import React, { Component } from 'react';
import { ServicesPage } from '../pages';

class Root extends Component {
    render() {
        const { data } = this.props;
        return <ServicesPage data={data ? data : {}}/>
    }
}

export default Root;