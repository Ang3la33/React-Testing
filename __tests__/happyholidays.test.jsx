import React from "react";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HappyHolidays from "../components/HappyHolidays";

test('renders the component correctly', () => {
    render(<HappyHolidays/>);
    expect(screen.getByText(/it's december!!!/i)).toBeInTheDocument();
});

test('does not display "Happy Holidays Hurrah!" immediately', () => {
    render(<HappyHolidays/>);
    expect(screen.queryByText(/happy holidays hurrah!/i)).not.toBeInTheDocument();
});

test('displays "Happy Holidays Hurrah!" after 3 seconds', async () => {
    render(<HappyHolidays/>);
    const holidayMessage = await screen.findByText(/happy holidays hurrah!/i, {}, {timeout: 3500});
    expect(holidayMessage).toBeInTheDocument();
});
