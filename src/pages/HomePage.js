import React, { Component } from 'react';
import { Header, Footer } from '../components';
import { VideoWrap, TopContent, MiddleContent, BottomContent } from '../styled-components/pages/home';
import { PageWrapper, ContentWrapper } from '../styled-components/global';

class Home extends Component {
  state = {
    color: ""
  }
  componentDidMount(){
    setTimeout(() => {
      this.setState({
        color: "whitewash"
      })
    }, 500)

  }
  render(){
    const { color } = this.state;
    return (
        <PageWrapper>
            <Header/>
            <ContentWrapper>
              <TopContent>
                <h1 className={color}>DREAMSCAPE GARDENS</h1>
                <h2 className={color}>Serving Salt Lake City, Utah</h2>
              </TopContent>
              <MiddleContent>
                <h2>Services</h2>
                <hr/>
                <h3>Landscape Construction</h3>
                <p>We provide all traiditonal services from new construction to hardscaping and irrigation systems.</p>
                <ul>
                  <li>Excavation/Removal</li>
                  <li>Hardscaping (concrete, patio, decking, fencing, etc.)</li>
                  <li>Irrigiation Systems</li>
                  <li>Lighting</li>
                  <li>Xeriscaping</li>
                  <li>Sod, Gravel, Mulch Cover</li>
                  <li>Planting</li>
                </ul>
                <hr/>
                <h3>Landscape Maintenance</h3>
                <p>We offer all maintenance services from mowing to snow removal and gardening.</p>
                <ul>
                  <li>Lawn Maintenance (mowing, triming, seeding, leaf removal, aeration)</li>
                  <li>Plant Maintenance (tree/bush trimming, troubleshooting, fertilizer)</li>
                  <li>Garden Maintenance (weeding, soil evaluation)</li>
                  <li>Snow Removal (shoveling, plowing, snow blowing)</li>
                  <li>Irrigation System Repair</li>
                </ul>
              </MiddleContent>
            </ContentWrapper>
            <Footer/>
            <VideoWrap>
              <video muted loop autoPlay playsInline preload="auto">
                  <source src="/images/background.mp4" type="video/mp4"/>
              </video>
            </VideoWrap>
        </PageWrapper>
    );
  }
}

export default Home;
