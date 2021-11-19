import React from 'react';
import { render } from 'react-dom';
import { LandscapingPage } from '../pages';

if (window)
  render(
    <LandscapingPage data={window.__DATA__} />,
    document.getElementById('app')
  );
