import { createChatBotMessage, createCustomMessage } from 'react-chatbot-kit';
import LanguagePicker from '../components/languagePicker.js';
import Intro from '../components/intro/intro.js';

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
    }
};

export default config;