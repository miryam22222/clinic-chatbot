import { createChatBotMessage, createCustomMessage } from 'react-chatbot-kit';
import LanguagePicker from '../components/languagePicker.js';

const config = {
    initialMessages: [createCustomMessage('pickLanguage', 'languagePicker')],
    // widgets: [
    //     {
    //         widgetName: 'languagePicker',
    //         widgetFunc: (props) => <LanguagePicker {...props} />,
    //     },
    // ],
    customMessages: {
        languagePicker: (props) => <LanguagePicker {...props} />,
    }
};

export default config;