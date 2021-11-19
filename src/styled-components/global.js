import styled from 'styled-components';
import {darkblue, white, lightblue, pink, green} from './colors';

export const PageWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
`;

export const ContentWrapper = styled.div`
  margin: auto;
  text-align: center;
  position: relative;
`;

export const Button = styled.div`
  background: ${pink};
  padding: 6px 12px;
  margin: 12px auto;
  border: 1px solid #8d8d8d;
  border-radius: 3px;
  width: max-content;
  &:hover {
    cursor: pointer;
    border: 2px solid #8d8d8d;
  }
`;
