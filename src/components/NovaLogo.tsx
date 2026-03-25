import React from 'react';

export function NovaLogo({ size = 36, className = "" }: { size?: number, className?: string }) {
    return (
        <svg 
            width={size} 
            height={size} 
            viewBox="0 0 100 100" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className={`drop-shadow-md ${className}`}
        >
            {/* Background Rounded Square matching --accent color */}
            <rect width="100" height="100" rx="24" fill="currentColor" className="text-accent" />
            
            {/* The 'N' Path */}
            <path 
                d="M30 75V40C30 34 34 30 38 30C41 30 44 32 45 35L55 65C56 68 59 70 62 70C67 70 71 66 71 60V25" 
                stroke="white" 
                strokeWidth="10" 
                strokeLinecap="round" 
                strokeLinejoin="round"
            />
            {/* Upward Arrow on the Right Stem */}
            <path 
                d="M56 35L71 20L86 35" 
                stroke="white" 
                strokeWidth="10" 
                strokeLinecap="round" 
                strokeLinejoin="round"
            />
        </svg>
    );
}
