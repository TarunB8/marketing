// Updated page.tsx with modern UI styling, including Light and Dark theme support, improved spacing, card-based layout with hover effects, and smooth transitions while maintaining the existing structure and functionality.

import React, { useState } from 'react';
import './styles.css'; // Import necessary CSS file to support themes

const Page = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div className={isDarkMode ? 'page dark-mode' : 'page light-mode'}>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <div className="card-container">
                {/* Example of card layout */}
                <div className="card">
                    <h2>Card Title</h2>
                    <p>Card content goes here. This layout adapts to both light and dark modes.</p>
                </div>
                <div className="card">
                    <h2>Card Title</h2>
                    <p>More content in another card.</p>
                </div>
                {/* Add more cards as necessary */}
            </div>
        </div>
    );
};

export default Page;
