import React from 'react'
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Button from '../components/Welcome';

test('renders the Click me button', () => {
    render(<Button/>);
    const buttonElement = screen.getByRole('button', {name: /click me/i});
    expect(buttonElement).toBeInTheDocument();
});

test('renders the Welcome heading', () => {
    render(<Button/>);
    const headingElement = screen.getByRole('heading', {level: 2, name: /welcome/i});
    expect(headingElement).toBeInTheDocument();
});

test('renders the Thanks for visiting heading', () => {
    render(<Button/>);
    const headingElement = screen.getByRole('heading', { level: 3, name: /thanks for visiting/i});
    expect(headingElement).toBeInTheDocument();
});