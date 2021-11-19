import React from 'react';
import { render } from 'react-dom';
import { ServicesPage } from '../pages';

if (window)
  render(
    <ServicesPage data={window.__DATA__} />,
    document.getElementById('app')
  );
