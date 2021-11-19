import React, { Component } from 'react';
import { Header, Footer } from '../components';
import { GardensContent } from '../styled-components/pages/gardens';
import { PageWrapper, ContentWrapper } from '../styled-components/global';

class Gardens extends Component {
    render(){
      return (
          <PageWrapper>
              <Header/>
              <ContentWrapper>
                <GardensContent>
                  gardens page
                </GardensContent>
              </ContentWrapper>
              <Footer/>
          </PageWrapper>
      );
    }
}

export default Gardens;
