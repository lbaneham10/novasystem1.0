export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    try {
        const payload = req.body;
        console.log("Receiving GHL Webhook Payload:", JSON.stringify(payload));

        // 1. Verify the payload is an inbound message to Nova Systems
        // Typically GHL webhooks include: type, locationId, contactId, body, messageType, etc.
        const { type, locationId, contactId, body, messageType } = payload;

        // Ensure we only respond to inbound messages, not our own outbound ones to prevent an infinite loop!
        if (type !== 'InboundMessage' || !body) {
            return res.status(200).json({ status: 'Ignored: Not an inbound message' });
        }

        const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;
        const GHL_TOKEN = process.env.GHL_PRIVATE_INTEGRATION_TOKEN;

        if (!ANTHROPIC_API_KEY || !GHL_TOKEN) {
            console.error("Missing Environment Variables.");
            return res.status(500).json({ error: 'Missing Integration Secrets' });
        }

        // 2. Headless LLM: Ask Claude to generate a reply
        const anthropicPrompt = `
        You are "Nova", the AI Receptionist for an automation agency called Nova Systems.
        The user reached out via ${messageType || 'chat'}.
        
        Our core offering is a $299/mo "Revenue Recovery System" for local service businesses (like HVAC, plumbers) which includes:
        - A premium, instant-booking website
        - Missed-Call Auto-Text Back
        - You (the AI Chatbot Receptionist)

        User's Message: "${body}"

        Rules for replying:
        - Be highly concise (SMS length, human-like, under 250 characters).
        - If they asked a question, answer it.
        - The ultimate goal is to get them to book a 15-minute discovery call at: https://calendly.com/novasystems/discovery
        - Only output the exact text you want to reply with, no quotes or metadata.
        `;

        const claudeRes = await fetch('https://api.anthropic.com/v1/messages', {
            method: 'POST',
            headers: {
                'x-api-key': ANTHROPIC_API_KEY,
                'anthropic-version': '2023-06-01',
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                model: 'claude-3-5-sonnet-20241022',
                max_tokens: 250,
                messages: [{ role: 'user', content: anthropicPrompt }]
            })
        });

        const claudeData = await claudeRes.json();

        if (claudeData.error) {
            throw new Error('Claude Error: ' + claudeData.error.message);
        }

        const aiResponseText = claudeData.content[0].text;
        console.log("Claude Generated Reply:", aiResponseText);

        // 3. Send the message back out through GoHighLevel's V2 Conversations API
        const ghlRes = await fetch('https://services.leadconnectorhq.com/conversations/messages', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${GHL_TOKEN}`,
                'Version': '2021-04-15',
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                type: messageType === 'SMS' ? 'SMS' : 'Email', // Assuming Webchat falls under a specific type or defaults
                contactId: contactId,
                message: aiResponseText
            })
        });

        const ghlData = await ghlRes.json();

        return res.status(200).json({
            status: 'Success: Message Sent',
            ai_reply: aiResponseText,
            ghl_response: ghlData
        });

    } catch (error) {
        console.error("Webhook Execution Error:", error.message);
        return res.status(500).json({ error: error.message });
    }
}
