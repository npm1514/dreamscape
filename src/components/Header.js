import React, { Component } from 'react';
import { Header, MenuBars, Menu } from '../styled-components/components/header';

class HeaderComponent extends Component {
  state = {
    svgid: "",
    menuOpen: false,
    fullOpaque: ""
  }
  toggleMenu = () => {
    this.setState({
      menuOpen: !this.state.menuOpen
    })
  }
  componentDidMount(){
    setTimeout(() => {
      this.setState({
        svgid: "svgfill",
        fullOpaque: "fullOpaque"
      })
    }, 500)
  }
  render(){
    const { svgid, menuOpen, fullOpaque } = this.state;
    return (
      <Header>
        <a href="/">
          <svg id={svgid} version="1.1" x="0px" y="0px" viewBox="50.1 170.9 495 500" enableBackground="new 50.1 170.9 495 500" style={{height: '100px', width: '100px'}}>
            <g id="leaves">
            	<path id="left-leaves" d="M179.9,486.6c0,0-25.6,4.5-52-19.1c-28.8-25.7-32-28.3-48.5-60.7c-12.7-24.7-35.5-69.1-13-143.6   s55.5-83.1,77.9-86.5c22.5-3.5,50.3-12.9,88.3,14.7s54.5,51.1,56.3,93.5c1.7,42.4-4.3,115.8-41.6,158.3   c-37.2,42.5-55.8,47.3-72,47.1"/>
            	<path id="mid-leaves" d="M281.8,561.7c0,0-53-33.8-53.3-82.2c-0.2-48.4,17.9-175.2,37-218.4c19.9-45.4,33.5-53.1,59.9-46.8   c52.7,12.6,89.4,240.2,56.2,301.6C348.5,577.2,281.8,561.7,281.8,561.7"/>
            	<path id="right-leaves" d="M443.8,505.5c0,0-22.5,3.7-45.8-16.1c-25.3-21.7-28.3-24.1-42.7-51.4c-11.1-21.1-31.3-58.9-11.5-122.1   c19.8-63.2,48.9-70.5,68.7-73.5c19.8-3,44.3-11,77.8,12.5c33.6,23.5,48.1,43.4,49.6,79.4s-3.8,98.3-36.7,134.5s-49.2,40.2-63.5,40"/>
            </g>
            <g id="bases">
              <path id="left-base" d="M170.8,642.3c0,0,2.9-25.3,3.8-51.9c1-26.5-3.1-126.5-4.7-144.4c-2.9-33.9-10-53.9-14.5-68.7   c-5-16.5-7.3-26.4-10.7-36.8c-8.8-27.3-28.3-55.4-22-59.5s11.3,3.9,13.6,16.4c2.2,12.4,10.4,29.6,10.4,29.6s-4.9-36.5-0.3-38.9   c4.6-2.4,5.1,5.5,4.7,17c-0.4,11.5,8.5,56.7,14.2,69.3c5.7,12.6,16.9-82.8,17.3-95.6c0.4-12.9-6.5-43.5,0.7-46.1   c6.7-2.4,5.5,54.2,5.5,54.2s13.5-38.9,17-37.1c3.5,1.9,2.2-1.5,1.1,5.5c-1.2,7-15.2,39.7-16.1,48.5c-1.6,14.5-6.5,61.4-3.3,72.1   c3.2,10.7,4.3-1.6,7.2-10.2c4.5-13.6,20.6-49.2,21.5-53.9c0.7-3.6,4.8-25.4,6.9-13c2,12.4-10,42.2-10,42.2s10.6-16.5,14-12.9   c3.4,3.7,0,0-10.5,15.4c-8.5,12.4-14.3,17.8-17.3,38.4c-1.3,8.3-9.4,8.8-7.6,49.4c0.8,20.8,5.4,138.9,8.2,158.4   c2.9,19.5,4.1,55.7,3.2,58.3C202.1,650.7,169.9,664.5,170.8,642.3"/>
            	<path id="mid-base" d="M303.9,661.8c0,0,0.4,6.2,5.1,4.6s9-0.3,9-0.3l0.8-406c0,0-2-5.2-5.8-6.9s-3.6,3.4-3.6,3.4s0.3,23.9,0,42.8   c-0.4,21.4-3.9,38.6-3.2,46c0.6,5.7,0.5,118.6-2.4,125.3S303.9,661.8,303.9,661.8"/>
              <path id="right-base" d="M458.9,636.4c0,0,0.3-20.3-1.2-42.7c-1.5-22.5-0.5-100.2,0.4-115.5c1.7-28.8,4.5-54.4,8.1-67.1    c4-14.2,5.8-22.6,8.6-31.5c7.1-23.3,20.8-59.1,15.4-63c-3.5-2.5-4.9,14.1-8.9,26.2c-3.4,10.2-8.5,25.3-8.5,25.3s3.4-31.1-0.6-33    c-4-2-4.3,4.8-3.7,14.5s-6.2,48.4-10.9,59.2c-3.6,8.1-11.2-35.2-15.1-62c-0.2-1.6-0.4-3-0.6-4.5c-1-6.8-1.6-12.1-1.7-14.3    c-0.7-10.9,4.8-37-1.7-39.1c-5.9-1.9-3.6,46.1-3.6,46.1S422,302.3,419,304c-3,1.7-1.6,1.8-0.8,4.8c1.5,5.8,14.2,33.3,15.3,40.8    c1.7,12.3,7.1,52,4.6,61.2c-2.5,9.1-3.9-1.3-6.6-8.5c-4.2-11.5-19.3-41.4-20.3-45.3c-0.7-3-2.8-31.2-5.4-22.5    c-3.2,10.3,8.8,47.2,8.8,47.2s-9.8-13.9-12.6-10.7c-2.9,3.2,0,0,9.6,12.7c7.7,10.3,9,15.9,16.1,32.1c2.8,6.3,6.4,21,5.7,55.6    c-0.3,17.6-0.5,101.7-1.5,120.9c-0.8,16.8-2.3,47.4-1.5,49.5C431.4,644.1,460.1,655.1,458.9,636.4"/>
            </g>
          </svg>
        </a>
        <MenuBars onClick={this.toggleMenu}>
          <div id="menu1" className={`menuBar ${fullOpaque}`}></div>
          <div id="menu2" className={`menuBar ${fullOpaque}`}></div>
          <div id="menu3" className={`menuBar ${fullOpaque}`}></div>
        </MenuBars>
        <Menu className={menuOpen ? "menuOpen" : ""}>
          this is a menu
          <div onClick={this.toggleMenu}>exit</div>
        </Menu>
      </Header>
    );
  }
}

export default HeaderComponent;
