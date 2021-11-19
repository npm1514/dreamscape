import React from 'react';
import { render } from 'react-dom';
import { GardensPage } from '../pages';

if (window)
  render(
    <GardensPage data={window.__DATA__} />,
    document.getElementById('app')
  );
