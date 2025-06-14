import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import React from 'react';
import App from './App';
import { describe, it, expect } from 'vitest';

describe('App', () => {
  it('renders greeting', () => {
    render(<App />);
    expect(screen.getByText('Hello from React')).toBeInTheDocument();
  });
});
