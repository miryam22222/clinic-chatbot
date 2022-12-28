import { createChatBotMessage } from 'react-chatbot-kit';

export const WEATHER_BASE = "https://api.open-meteo.com";
export const WEATHER_ENDPOINT = `${WEATHER_BASE}/v1/forecast`;
export const SUPABASE_URL = process.env.SUPABASE_URL;
export const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY;
export const CONTACT_FORM_ENDPOINT = "/api/contact/";
export const CONTACT_FORM_TABLE_NAME = "submission";

const config = {
  initialMessages: [createChatBotMessage(`Hello world`)],
};

export default config;
// NOTE: the common approach is to set these values from environment variables
// and not to have the values "hard-coded" with the code.
// Then, you use the host or wherever the process is running to set the variables
// and you read them in here
// So if you do that it will look something like:
// export const API_BASE = process.env.API_BASE