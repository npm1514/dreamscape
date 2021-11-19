import React, { Component } from 'react';
import { Header, Footer } from '../components';
import { LandscapingContent } from '../styled-components/pages/landscaping';
import { PageWrapper, ContentWrapper } from '../styled-components/global';

class Landscaping extends Component {
    render(){
      return (
          <PageWrapper>
              <Header/>
              <ContentWrapper>
                <LandscapingContent>
                  landscaping page
                </LandscapingContent>
              </ContentWrapper>
              <Footer/>
          </PageWrapper>
      );
    }
}

export default Landscaping;
