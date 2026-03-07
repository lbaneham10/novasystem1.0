import { Variants } from 'motion/react';

// === CORE ANIMATION PRESETS ===

export const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
};

export const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
};

export const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.12, delayChildren: 0.15 },
    },
};

export const scaleUp: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
};

// The cycling words for the hero
export const CYCLING_WORDS = [
    'Plumbers',
    'Roofers',
    'HVAC Techs',
    'Electricians',
    'Contractors',
];

// Tech logo marquee
export const TECH_LOGOS = [
    'GoHighLevel',
    'Stripe',
    'Twilio',
    'Voiceflow',
    'Google Business',
    'Cloudflare',
    'Vercel',
];

// Pricing tiers
export interface PricingTier {
    name: string;
    badge?: string;
    setup: string;
    monthly: string;
    features: string[];
    cta: string;
    highlighted?: boolean;
}

export const PRICING_TIERS: PricingTier[] = [
    {
        name: 'The Foundation',
        setup: '$997',
        monthly: '$297/mo',
        features: [
            'Custom Website',
            'CRM Unified Inbox',
            'Missed-Call Text Back',
            'Automated Review Requests',
        ],
        cta: 'Get Started',
    },
    {
        name: 'The Automator',
        badge: 'Most Popular',
        setup: '$1,497',
        monthly: '$497/mo',
        features: [
            'Everything in Foundation',
            'AI Website Chatbot',
            'Database Reactivation',
            'Priority Support',
        ],
        cta: 'Get Started',
        highlighted: true,
    },
    {
        name: 'The Scale Partner',
        setup: '$2,997',
        monthly: '$997/mo',
        features: [
            'Everything in Automator',
            '24/7 AI Voice Receptionist',
            'Local Ads Management',
            'Dedicated Growth Manager',
        ],
        cta: 'Partner With Us',
    },
];

// Solutions / Ecosystem
export interface Solution {
    title: string;
    description: string;
    icon: string;
    image: string;
}

export const SOLUTIONS: Solution[] = [
    {
        title: 'Organic Digital Storefronts',
        description:
            'Lightning-fast, mobile-optimized websites built for local trust and SEO. Every site is hand-crafted to feel like a local business, not a template.',
        icon: 'Monitor',
        image: '/images/solution_1.png',
    },
    {
        title: 'The Unified Command Center',
        description:
            'Your Facebook messages, Google chats, texts, emails, and website leads all flow into one single, peaceful inbox. Never miss a message again.',
        icon: 'Inbox',
        image: '/images/solution_2.png',
    },
    {
        title: 'The AI Shield',
        description:
            'Missed-Call Text Back instantly catches every missed call. AI Chatbots qualify leads 24/7. AI Voice Receptionists answer the phone when you\'re on a rooftop.',
        icon: 'ShieldCheck',
        image: '/images/solution_3.png',
    },
];

// Scrolling marquee text
export const MARQUEE_TEXT =
    'Evolve to survive. · Arm your business. · Protect the trades. · ';
