const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();
require('dotenv').config(); // Para carregar as variáveis de ambiente

// Configurar CORS
app.use(cors({
    origin: ['https://digitalskills.brightspace.com'],
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

// Função para obter o token OAuth2
async function getOAuth2Token() {
    const tokenResponse = await axios.post(process.env.OAUTH2_TOKEN_URL, null, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        auth: {
            username: process.env.CLIENT_ID,
            password: process.env.CLIENT_SECRET
        },
        params: {
            grant_type: 'client_credentials',
            scope: process.env.OAUTH2_AUDIENCE
        }
    });
    return tokenResponse.data.access_token;
}

// Rota para testar a autenticação e resposta
app.get('/api/test', async (req, res) => {
    try {
        const token = await getOAuth2Token();
        res.json({ message: 'Autenticado com sucesso!', token: token });
    } catch (error) {
        res.status(500).json({ error: 'Falha ao autenticar' });
    }
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
