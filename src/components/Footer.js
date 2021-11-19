import React, { Component } from 'react';
import { Footer } from '../styled-components/components/footer';

class FooterComponent extends Component {
  render(){
    return (
      <Footer>
        <h3>Copyright 2020 Dreamscape Gardens LLC</h3>
        <h3>SLC, UT | 440-463-3775</h3>
        <h3>dreamscapegardensslc@gmail.com</h3>
      </Footer>
    );
  }
}

export default FooterComponent;
