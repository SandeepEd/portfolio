import React, { useState, useEffect } from 'react';

const AnimatedText = ({ text = 'Sandeep Edara', delay = 100 }) => {
    const [visibleText, setVisibleText] = useState('');

    useEffect(() => {
        let timer: number;
        if (text.length > visibleText.length) {
            timer = setTimeout(() => {
                setVisibleText(text.slice(0, visibleText.length + 1));
            }, delay);
        }
        if (text.length === visibleText.length - 1) {
            setVisibleText(text.slice(0, 1));
        }

        return () => clearTimeout(timer);
    }, [text, visibleText, delay]);

    return (
        <div className="text-5xl">
            {visibleText || ' '}
        </div>
    );
};

export default AnimatedText;