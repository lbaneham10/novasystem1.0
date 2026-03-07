import { motion } from 'motion/react';
import { TECH_LOGOS } from '../constants';

export function LogoMarquee() {
    // Duplicate for seamless loop
    const logos = [...TECH_LOGOS, ...TECH_LOGOS, ...TECH_LOGOS];

    return (
        <section className="py-8 overflow-hidden border-y border-text-dark/5">
            <motion.div
                animate={{ x: ['0%', '-33.33%'] }}
                transition={{
                    x: { repeat: Infinity, repeatType: 'loop', duration: 25, ease: 'linear' },
                }}
                className="flex items-center gap-16 whitespace-nowrap"
            >
                {logos.map((logo, i) => (
                    <span
                        key={`${logo}-${i}`}
                        className="text-lg font-semibold text-text-dark/40 select-none shrink-0"
                    >
                        {logo}
                    </span>
                ))}
            </motion.div>
        </section>
    );
}
