import styled from 'styled-components';
export const Header = styled.header`
  width: calc(100% - 32px);
  min-height: 100px;
  color: #000;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  svg {
    #left-leaves {
      fill: transparent;
      transition-property: fill;
      transition-duration: 1s;
      transition-timing-function: ease;
      transition-delay: 0;
    }
    #mid-leaves {
      fill: transparent;
      transition-property: fill;
      transition-duration: 2s;
      transition-timing-function: ease;
      transition-delay: 0;
    }
    #right-leaves {
      fill: transparent;
      transition-property: fill;
      transition-duration: 3s;
      transition-timing-function: ease;
      transition-delay: 0;
    }
    #left-base {
      fill: #000;
      transition-property: fill;
      transition-duration: 1s;
      transition-timing-function: ease;
      transition-delay: 0;
    }
    #mid-base {
      fill: #000;
      transition-property: fill;
      transition-duration: 2s;
      transition-timing-function: ease;
      transition-delay: 0;
    }
    #right-base {
      fill: #000;
      transition-property: fill;
      transition-duration: 3s;
      transition-timing-function: ease;
      transition-delay: 0;
    }
    &#svgfill #left-base, &#svgfill #left-leaves {
      fill: #ffa500bd;
    }
    &#svgfill #mid-base, &#svgfill #mid-leaves {
      fill: #800080c4;
    }
    &#svgfill #right-base, &#svgfill #right-leaves {
      fill: #ff0000bd;
    }
  }
`;

export const MenuBars = styled.div`
  width: 48px;
  height: 39px;
  margin: 28px;
  &:hover {
    cursor: pointer;
    #menu1 {
      background-color: #ffa500bd;
    }
    #menu2 {
      background-color: #800080c4;
    }
    #menu3 {
      background-color: #ff0000bd;
    }
  }
  .menuBar {
    opacity: 0;
    background-color: #fff;
    width: 48px;
    height: 5px;
    fill: transparent;
    transition-property: opacity, background-color;
    transition-duration: 2s;
    transition-timing-function: ease;
    transition-delay: 0;
    border-radius: 2px;
  }
  .fullOpaque {
    opacity: 1;
  }
  #menu2 {
    margin: 12px 0;
  }
`;

export const Menu = styled.div`
  height: 100vh;
  width: 350px;
  background: #Fff;
  position: absolute;
  top: 0;
  right: -350px;
  transition-property: right;
  transition-duration: 1s;
  transition-timing-function: ease;
  transition-delay: 0;
  &.menuOpen {
    right: 0;
  }
`;
