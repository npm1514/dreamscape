import styled from 'styled-components';

export const TopContent = styled.div`
  width: 100%;
  text-align: center;
  min-height: 100vh;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h1, h2 {
    transition-property: color;
    transition-duration: 2s;
    transition-timing-function: ease;
    transition-delay: 0;
    width: 100%;
    margin: 0;
    box-sizing: border-box;
  }
  h1 {
    font-size: 8vw;
    color: #ffa500bd;
    padding: 16px;
  }
  h2 {
    font-size: 3vw;
    color: #ff0000bd;
    padding: 0;
  }
  .whitewash {
    color: #fff;
  }
`;

export const MiddleContent = styled.div`
  width: 100%;
  text-align: center;
  padding: 24px;
  background-color: #fff;
  color: #8d8d8d;
  box-sizing: border-box;
  h2 {
    font-size: 4vw;
    margin: 24px auto;
  }
  h3 {
    font-size: 3vw;
  }
  hr {
    max-width: 500px;
  }
  ul, li {
    max-width: 364px;
    margin: auto;
    text-align: left;
  }
  ul {
    margin-bottom: 24px;
  }
`;

export const BottomContent = styled.div`
  width: 100%;
  text-align: center;
  padding: 24px;
  background-color: #ffa500bd;
  color: #8d8d8d;
  box-sizing: border-box;
  h2 {
    font-size: 4vw;
  }
`;

export const VideoWrap = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: -10;
  top: 0;
  left: 0;
  overflow: hidden;

  video {
    min-height: 100vh;
    min-width: 100vw;
    height: 100vh;
  }
`;
