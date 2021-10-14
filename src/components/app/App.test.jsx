import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders app', () => {
    render(<App />);

    const app = screen.getByText('Find your music match');
    expect(app).not.toBeEmptyDOMElement();
  });
});
