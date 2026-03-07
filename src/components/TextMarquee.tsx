import { motion } from 'motion/react';
import { MARQUEE_TEXT } from '../constants';

export function TextMarquee() {
    const text = MARQUEE_TEXT.repeat(6);

    return (
        <section className="py-8 overflow-hidden bg-cream-alt">
            <motion.div
                animate={{ x: ['0%', '-50%'] }}
                transition={{
                    x: { repeat: Infinity, repeatType: 'loop', duration: 30, ease: 'linear' },
                }}
                className="flex items-center whitespace-nowrap"
            >
                <span className="text-marquee font-extrabold text-text-dark/10 select-none">
                    {text}
                </span>
            </motion.div>
        </section>
    );
}
