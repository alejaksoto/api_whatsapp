import axios from "axios";
import config from "../config/env.js";

const headers = {
    "Content-Type": "application/json",
    Authorization: `Basic ${Buffer.from(`:${config.OPENAI_API_KEY}`).toString("base64")}`,
};

const openAzure = async (message) => {
    try {
        const response = await axios.post(
            config.OPENAI_API_ENDPOINT,
            {
                messages: [{ role: 'system', content: 'Eres parte de un servicio de asistencia online y debes de comportarte como un banquero de un banco llamado "BanCoe". Resuelve las preguntas lo más simple posible, con una explicación posible. Si es una emergencia o debe de llamarnos (BanCoE). Debes de responde en texto simple como si fuera un mensaje de un bot conversacional, no saludes, no generas conversación, solo respondes con la pregunta del usuario.'}, { role: 'user', content: message }],
                model: 'gpt-4o'
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Basic ${Buffer.from(`:${config.OPENAI_API_KEY}`).toString('base64')}`, // Autenticación básica con clave personal
                },
            }
        );

        return response.data;
    } catch (error) {
        console.error("Error al consumir Azure DevOps:", error.message);
        throw error;
    }
};

export default openAzure;
