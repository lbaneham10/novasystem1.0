import { motion } from 'motion/react';
import { PhoneOff, StickyNote, TrendingDown } from 'lucide-react';
import { fadeUp, staggerContainer } from '../constants';

const PROBLEMS = [
    {
        icon: PhoneOff,
        title: 'Missed Calls',
        description:
            '62% of customers who call a local business and don\'t get an answer will never call back. They call the next guy on Google.',
    },
    {
        icon: StickyNote,
        title: 'Leads Falling Through',
        description:
            'Post-it notes and text threads are not a CRM. Leads fall through the cracks every single day.',
    },
    {
        icon: TrendingDown,
        title: 'Wasted Ad Spend',
        description:
            'You\'re driving traffic to a website that doesn\'t convert and has no system to capture the lead.',
    },
];

export function ProblemSection() {
    return (
        <section id="mission" className="bg-deep py-20 md:py-32">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                {/* Headline */}
                <motion.h2
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-80px' }}
                    variants={fadeUp}
                    className="font-serif italic text-text-light text-section text-center max-w-4xl mx-auto mb-16"
                >
                    "You're busy doing the real work. But every missed call is money walking out the door."
                </motion.h2>

                {/* Problem Cards */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-80px' }}
                    variants={staggerContainer}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
                >
                    {PROBLEMS.map((problem) => (
                        <motion.div
                            key={problem.title}
                            variants={fadeUp}
                            className="glass-dark p-8 text-center"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-accent/15 flex items-center justify-center mx-auto mb-5">
                                <problem.icon size={28} className="text-accent-light" />
                            </div>
                            <h3 className="text-xl font-bold text-text-light mb-3">{problem.title}</h3>
                            <p className="text-text-light-muted leading-relaxed text-sm">
                                {problem.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom Statement */}
                <motion.p
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-80px' }}
                    variants={fadeUp}
                    className="text-center text-xl md:text-2xl font-bold text-text-light max-w-3xl mx-auto leading-snug"
                >
                    The big corporations have call centers, AI receptionists, and million-dollar CRMs.{' '}
                    <span className="text-accent-light">You deserve the same firepower.</span>
                </motion.p>
            </div>
        </section>
    );
}
