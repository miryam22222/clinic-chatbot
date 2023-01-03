// react component with buttons to pick a language
// One big button with a dropdown menu to pick a language, and 4 predefined buttons under it
// in 3 languages: hebrew, english, arabic

import React from 'react';

const handleClick = (event) => {
}

export default function LanguagePicker() {
    return (
        <div>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                Open Menu
            </Button>
        </div>
    )
}