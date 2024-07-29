import React from "react";
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Users from "../components/Users";

test('renders the heading correctly', () => {
    render(<Users users={[]}/>);
    const headingElement = screen.getByRole('heading', {name: /users starting with letter b/i});
    expect(headingElement).toBeInTheDocument();
});

test('renders a list element', () => {
    render(<Users users={[]}/>);
    const listElement = screen.getByRole('list');
    expect(listElement).toBeInTheDocument();
});

test('renders the correct number of users starting with B', () => {
    const users = ["Simon", "Barbera", "Bob", "Elf", "Alexandar", "Brad"];
    render (<Users users={users}/>);
    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(3);
});