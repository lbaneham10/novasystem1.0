import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { google } from 'googleapis';

// Load environment variables
dotenv.config();

// Avoid dirname resolution because of macOS security locks on the project folder
const __dirname = process.cwd();

// Ensure Anthropic API Key is available
const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;
if (!ANTHROPIC_API_KEY) {
    console.error("❌ Error: ANTHROPIC_API_KEY is not set in .env");
    process.exit(1);
}

// Ensure GHL Private Integration Token is available 
const GHL_TOKEN = process.env.GHL_PRIVATE_INTEGRATION_TOKEN;
if (!GHL_TOKEN) {
    console.warn("⚠️ Warning: GHL_PRIVATE_INTEGRATION_TOKEN is not set. GHL features will be disabled.");
}

/**
 * Nova Systems: Zero-Cost WOW Prototype Generator
 * 
 * Usage: 
 * node wow_generator.js --name "Joe's Plumbing" --industry "Plumber" --website "joesplumbing.com"
 */

async function generateCustomHooks(businessName, industry) {
    console.log(`🧠 Calling Anthropic (Claude 3) to generate custom hooks for ${businessName} (${industry})...`);

    const prompt = `
    You are an expert SaaS sales copywriter for a marketing automation agency called Nova Systems. 
    We are about to have an intake meeting with a local business called "${businessName}" in the "${industry}" industry.
    
    Our goal is to sell them a $299/mo "Revenue Recovery System" that includes:
    1. A premium website with instant booking capabilities.
    2. An AI Missed-Call Text-Back system.
    3. An AI Webchat Receptionist.
    
    Please provide:
    1. A high-impact hero headline for their prototype website.
    2. A short paragraph explaining exactly how much money they are losing by not capturing missed calls/web visitors via SMS.
    3. A compelling CTA (Call to Action) button text.
    
    Format the output strictly as JSON:
    {
        "headline": "...",
        "pain_point_copy": "...",
        "cta": "..."
    }
    `;

    try {
        const response = await fetch('https://api.anthropic.com/v1/messages', {
            method: 'POST',
            headers: {
                'x-api-key': ANTHROPIC_API_KEY,
                'anthropic-version': '2023-06-01',
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                model: 'claude-3-haiku-20240307',
                max_tokens: 1024,
                messages: [{ role: 'user', content: prompt }]
            })
        });

        const data = await response.json();

        if (data.error) {
            throw new Error(data.error.message);
        }

        const jsonMatch = data.content[0].text.match(/\{[\s\S]*\}/);
        if (jsonMatch) {
            return JSON.parse(jsonMatch[0]);
        } else {
            throw new Error("Could not parse JSON from Claude.");
        }

    } catch (error) {
        console.error("❌ Failed to generate hooks:", error);
        return {
            headline: `${businessName}: Capture Every Missed Lead`,
            pain_point_copy: `Did you know 30% of calls to ${industry}s go to voicemail? We capture them instantly.`,
            cta: `Automate ${businessName} Today`
        };
    }
}

async function buildPrototypeData(businessName, industry, website) {
    console.log(`\n🚀 Initializing WOW Prototype for [${businessName}]...`);
    console.log(`Industry: ${industry} | Current Site: ${website || 'None'}`);

    // Step 1: Generate AI Hooks
    const hooks = await generateCustomHooks(businessName, industry);

    // Step 2: Compile the Prototype Configuration
    const prototypeConfig = {
        businessName,
        industry,
        originalWebsite: website,
        theme: "dark", // Default premium theme
        hooks: hooks,
        generatedAt: new Date().toISOString()
    };

    // Step 3: Save to local JSON so the React frontend can consume it
    const dataPath = path.join(__dirname, 'public/prototype_config.json');
    fs.writeFileSync(dataPath, JSON.stringify(prototypeConfig, null, 2));

    console.log(`\n✅ Prototype data successfully generated and saved to public/prototype_config.json!`);
    console.log(`\n--- PROTOTYPE PREVIEW ---`);
    console.log(`Headline: ${hooks.headline}`);
    console.log(`Copy: ${hooks.pain_point_copy}`);
    console.log(`CTA: ${hooks.cta}`);
    console.log(`-------------------------\n`);

    console.log(`👉 Next Step for the Intake Meeting:`);
    console.log(`1. Run 'npm run dev'`);
    console.log(`2. The React frontend will automatically inject this data into the hero section and render the AI mockup.`);
    console.log(`3. Share your screen and blow them away.\n`);
}

// CLI Argument Parsing
const args = process.argv.slice(2);
let businessName = "Demo Business";
let industry = "Local Service";
let website = "";

for (let i = 0; i < args.length; i++) {
    if (args[i] === '--name' && args[i + 1]) businessName = args[i + 1];
    if (args[i] === '--industry' && args[i + 1]) industry = args[i + 1];
    if (args[i] === '--website' && args[i + 1]) website = args[i + 1];
}

// Execute
buildPrototypeData(businessName, industry, website);
