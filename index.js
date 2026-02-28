const express = require('express');
const axios = require('axios');
const path = require('path');
require('dotenv').config({ path: 'process.env' });

const app = express();
app.use(express.static(__dirname));
app.use(express.json());

const PORT = process.env.PORT || 3000;
const DIGI_CLIENT_ID = process.env.DIGILOCKER_CLIENT_ID;
const DIGI_CLIENT_SECRET = process.env.DIGILOCKER_CLIENT_SECRET;
const DIGI_BASE_URL = process.env.DIGILOCKER_BASE_URL;
const DIGI_BEARER = process.env.DIGILOCKER_API_BEARER;

// Route to serve your HTML Request Page
app.get('/digilocker', (req, res) => {
    res.sendFile(path.join(__dirname, 'digilocker_request.html'));
});

// Real endpoint simulating calling the provided API fetch route
app.post('/api/digilocker/fetch', async (req, res) => {
    try {
        // Fetch files from real Digilocker API from user provided cURL structure
        const response = await axios.get(`${DIGI_BASE_URL}/files/`, {
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${DIGI_BEARER}`
            }
        });

        // Normally we would parse through response.data here, but we'll return successful response 
        // to our frontend which will parse it visually!
        res.status(200).json({ success: true, files: response.data });

    } catch (error) {
        console.error("Initiate Fetch Error:", error.message);
        res.status(500).json({ success: false, error: 'Failed to authenticate with DigiLocker.' });
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Seva Connect Server: http://localhost:${PORT}/digilocker`);
});