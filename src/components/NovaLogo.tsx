import React from 'react';

export function NovaLogo({ size = 36, className = "" }: { size?: number, className?: string }) {
    // The logo uses a clever "double-stroke" SVG technique.
    // By drawing identical paths twice (once thick white, once thinner green on top),
    // it perfectly creates the seamless "hollow ribbon" effect of the attached N-Arrow logo.
    return (
        <svg 
            width={size} 
            height={size} 
            viewBox="0 0 100 100" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className={`drop-shadow-md ${className}`}
        >
            {/* Background Rounded Square */}
            <rect width="100" height="100" rx="22" fill="currentColor" className="text-accent" />
            
            {/* 1. OUTER STROKE (The thick white base) */}
            {/* Main N Ribbon */}
            <path 
                d="M 32 76 V 32 L 68 68 V 20" 
                stroke="white" 
                strokeWidth="16" 
                fill="none" 
                strokeLinejoin="round" 
                strokeLinecap="butt" 
            />
            {/* Arrowhead */}
            <path 
                d="M 52 38 L 68 22 L 84 38" 
                stroke="white" 
                strokeWidth="16" 
                fill="none" 
                strokeLinejoin="round" 
                strokeLinecap="butt" 
            />

            {/* 2. INNER STROKE (The hollow cutout matching background color) */}
            {/* Main N Ribbon Cutout */}
            <path 
                d="M 32 76 V 32 L 68 68 V 20" 
                stroke="currentColor" 
                strokeWidth="6" 
                fill="none" 
                strokeLinejoin="round" 
                strokeLinecap="butt" 
                className="text-accent"
            />
            {/* Arrowhead Cutout */}
            <path 
                d="M 52 38 L 68 22 L 84 38" 
                stroke="currentColor" 
                strokeWidth="6" 
                fill="none" 
                strokeLinejoin="round" 
                strokeLinecap="butt" 
                className="text-accent"
            />
        </svg>
    );
}
