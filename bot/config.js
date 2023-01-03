import { createChatBotMessage } from 'react-chatbot-kit';
import DogPicture from '../components/dogPicture.js';

const config = {
    initialMessages: [createChatBotMessage(`Hi! I'm clinicbot`)],
    widgets: [
        {
            widgetName: 'dogPicture',
            widgetFunc: (props) => <DogPicture {...props} />,
        },
    ],
};

export default config;