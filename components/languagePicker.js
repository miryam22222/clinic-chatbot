// react component with buttons to pick a language
// One big button with a dropdown menu to pick a language, and 4 predefined buttons under it
// in 3 languages: hebrew, english, arabic

import React, { useState } from 'react';
import Dropdown from './dropdown.js';
import NewDropDown from './newDropDown.js';

let rawLanguages = [
    { "code": "en",
      "language": "English"
    },
    { "code": "he",
      "language": "Hebrew"
    },
    { "code": "ru",
      "language": "Russian"
    },
    { "code": "am",
      "language": "Amharic"
    },
    { "code": "ar",
      "language": "Arabic"
    },
  ];

const primaryLanguages = ["he", "am", "ru"];

function loadLanguageList(primary) {
    let primaryLanguages = [];
    let otherLanguages = [];
    for (let i = 0; i < rawLanguages.length; i++) {
        if (primary.includes(rawLanguages[i]['code'])) {
            primaryLanguages.push(rawLanguages[i]['language']);
        }
        else {
            otherLanguages.push(rawLanguages[i]['language']);
        }
    }
    return {primaryLanguages, otherLanguages};
}

export default function LanguagePicker(props) {
    const [visibility, setVisibility] = useState(true);

    const handleChange = (chosenLanguage) => {
        setVisibility(false);
        props.actions.handleLanguagePicked(chosenLanguage);
    };

    if (!visibility) {
        return null;
    }

    const loadedLangs = loadLanguageList(primaryLanguages);

    return (
        <div>
            {/* <Dropdown handleSubmit={handleChange}>{["Arabic", "Indonesian"]}</Dropdown> */}
        {/* <Dropdown handleSubmit={handleChange}>[{loadLanguageList(primaryLanguages).primaryLanguages}, {loadLanguageList(primaryLanguages).otherLanguages}]</Dropdown> */}
            {/* <Dropdown handleSubmit={handleChange}>{loadedLangs.primaryLanguages}</Dropdown> */}
            <NewDropDown handleSubmit={handleChange}>{loadedLangs.primaryLanguages}</NewDropDown>
            {/* <Dropdown>{loadedLangs.primaryLanguages}</Dropdown> */}
        </div>
    );
};