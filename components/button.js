import React, { useState } from 'react';

export default function Button({ children }) {
    const [language, setLanguage] = useState('');

    const handleChange = (language) => {
        setLanguage(language);
    };

    return (
        <button onClick={() => handleChange(children)}>
            {children}
        </button>
    )
}

