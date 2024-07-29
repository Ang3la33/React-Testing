import React, { useState, useEffect } from 'react';

const HappyHolidays = () => {
    const [showHolidayMessage, setShowHolidayMessage] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowHolidayMessage(true);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            <h1>It's December!!!</h1>
            {showHolidayMessage && <h1>Happy Holidays Hurrah!</h1>}
        </div>
    );
};

export default HappyHolidays;
