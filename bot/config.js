import { createChatBotMessage, createCustomMessage } from 'react-chatbot-kit';

const config = {
    initialMessages: [createCustomMessage('value to input', 'custom')],
    widgets: [
        {
            widgetName: 'dogPicture',
            widgetFunc: (props) => <DogPicture {...props} />,
        },
    ]
};

export default config;