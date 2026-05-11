// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders DevDock title', () => {
    render(<App />);
    const titleElement = screen.getByText(/DevDock/i);
    expect(titleElement).toBeInTheDocument();
});
