import React, { Component } from 'react';
import { Header, Footer } from '../components';
import { ServicesContent } from '../styled-components/pages/services';
import { PageWrapper, ContentWrapper } from '../styled-components/global';

class Services extends Component {
    render(){
      return (
          <PageWrapper>
              <Header/>
              <ContentWrapper>
                <ServicesContent>
                  services page
                </ServicesContent>
              </ContentWrapper>
              <Footer/>
          </PageWrapper>
      );
    }
}

export default Services;
