import { google } from 'googleapis';
import dotenv from 'dotenv';
import fs from 'fs';

dotenv.config();

const tagmanager = google.tagmanager('v2');
const credentials = JSON.parse(fs.readFileSync(process.env.GOOGLE_APPLICATION_CREDENTIALS));

const auth = new google.auth.GoogleAuth({
    keyFile: process.env.GOOGLE_APPLICATION_CREDENTIALS,
    scopes: ['https://www.googleapis.com/auth/tagmanager.edit.containers'],
});

async function createClientContainer(clientName) {
    const authClient = await auth.getClient();
    google.options({ auth: authClient });

    // 1. In a real automation, we would first create/find a GTM Account
    // For now, we assume you have your account ID
    const accountId = 'YOUR_GTM_ACCOUNT_ID';

    try {
        const response = await tagmanager.accounts.containers.create({
            parent: `accounts/${accountId}`,
            requestBody: {
                name: `${clientName} Website`,
                usageContext: ['web']
            }
        });

        console.log(`✅ Created GTM Container for ${clientName}: ${response.data.publicId}`);
        return response.data;
    } catch (error) {
        console.error('❌ Error creating GTM container:', error.message);
    }
}

// Example usage:
// createClientContainer('Glendale HVAC');
