import { useState, useEffect } from 'react';

export interface PrototypeConfig {
    businessName: string;
    industry: string;
    originalWebsite: string;
    theme: string;
    hooks: {
        headline: string;
        pain_point_copy: string;
        cta: string;
    };
    generatedAt: string;
}

export function usePrototypeConfig() {
    const [config, setConfig] = useState<PrototypeConfig | null>(null);

    useEffect(() => {
        // Fetch the config dynamically on mount. 
        // We catch errors silently so if it doesn't exist, it defaults to Nova Systems branding.
        fetch('/prototype_config.json?t=' + new Date().getTime())
            .then(res => res.json())
            .then(data => {
                if (data && data.businessName) {
                    setConfig(data);
                }
            })
            .catch(() => {
                // If the file doesn't exist or is invalid, we do nothing.
            });
    }, []);

    return config;
}
