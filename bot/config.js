import { createChatBotMessage, createCustomMessage } from 'react-chatbot-kit';
import LanguagePicker from '../components/languagePicker.js';
import Intro from '../components/intro/intro.js';
import ClinicScroller from '../components/horizontalScrolling/clinicScroller.js';

// todo: replace with data from supabase
const examples =
    [{
        clinic: {
            description: "description1",
            examples: ["example1", "example2", "example3"]
        }
    },
    {
        clinic: {
            description: "description2",
            examples: ["example3", "example4", "example5"]
        }
    },
    {
        clinic: {
            description: "description3",
            examples: ["example6", "example7", "example8"]
        }
    },
    {
        clinic: {
            description: "description4",
            examples: ["example3", "example3", "example5"]
        }
    }];

const config = {
    initialMessages: [createCustomMessage('pickLanguage', 'languagePicker')],
    widgets: [
        {
            widgetName: 'IntroScreen',
            widgetFunc: (props) => <Intro {...props} />,
        },
    ],
    customMessages: {
        languagePicker: (props) => <LanguagePicker {...props} />,
        intro: (props) => <Intro {...props} />,
        scroller: (props) => <ClinicScroller {...props}>{examples}</ClinicScroller>,
    }
};

export default config;