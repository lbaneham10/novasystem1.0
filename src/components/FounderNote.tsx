import { motion } from 'motion/react';
import { fadeUp } from '../constants';

export function FounderNote() {
    return (
        <section className="bg-cream-alt py-20 md:py-32">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                variants={fadeUp}
                className="max-w-3xl mx-auto px-4 sm:px-6 text-center"
            >
                <h2 className="font-serif italic text-section text-text-dark mb-10">
                    "A note from our founder."
                </h2>

                <div className="space-y-6 text-text-muted text-lg leading-relaxed text-left">
                    <p>
                        I started Nova Systems because I watched my grandfather — <span className="font-bold text-text-dark">a plumber for 40 years</span> —
                        lose customers to companies with bigger budgets and shinier websites. He was the
                        best at what he did, but the digital world wasn't built for him.
                    </p>
                    <p>
                        The AI revolution scared him. It scares a lot of tradesmen. But AI isn't the
                        enemy.{' '}
                        <span className="font-bold text-text-dark">Corporate greed is.</span>{' '}
                        AI is the tool we use to fight back.
                    </p>
                    <p>
                        Nova Systems exists to make sure the local guy — the one who shows up on time,
                        does honest work, and cares about your home —{' '}
                        <span className="font-bold text-accent">never gets left behind.</span>
                    </p>
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-10 text-right font-serif italic text-xl text-text-dark"
                >
                    — The Nova Systems Team
                </motion.p>
            </motion.div>
        </section>
    );
}
