import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';

import config from '../bot/config.js';
import MessageParser from '../bot/MessageParser.js';
import ActionProvider from '../bot/ActionProvider.js';
import Footer from '../components/footer.js';

export default function ChatbotPage() {
    return (
        <div>
            <Chatbot
                config={config}
                messageParser={MessageParser}
                actionProvider={ActionProvider}
            >
            </Chatbot>
        </div>
    );
}

