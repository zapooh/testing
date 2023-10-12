import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import CounterComponent from './CounterComponent'; // Angi riktig sti til komponenten

describe('CounterComponent', () => {
  test('renders correctly and can increment count', () => {
    render(<CounterComponent />);
    
    // Sjekk at komponenten rendrer og viser initialverdien 0
    expect(screen.getByText('Current count: 0')).toBeInTheDocument();
    
    // Hent knappen og klikk på den
    const button = screen.getByText('Increment');
    fireEvent.click(button);
    
    // Sjekk at telleren har blitt oppdatert til 1
    expect(screen.getByText('Current count: 1')).toBeInTheDocument();
  });
});
