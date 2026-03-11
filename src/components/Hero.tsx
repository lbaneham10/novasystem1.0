import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, PhoneForwarded, Bot, Star } from 'lucide-react';
import { fadeUp, CYCLING_WORDS } from '../constants';
import { usePrototypeConfig } from '../hooks/usePrototypeConfig';

export function Hero() {
    const config = usePrototypeConfig();
    const [wordIndex, setWordIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setWordIndex((prev) => (prev + 1) % CYCLING_WORDS.length);
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 pt-28 pb-16 overflow-hidden">
            {/* Subtle radial gradient bg */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(45,106,79,0.08)_0%,_transparent_60%)] pointer-events-none" />

            <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="relative z-10 max-w-5xl mx-auto"
            >
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="inline-flex items-center gap-2 bg-accent/10 text-accent px-5 py-2 rounded-full text-sm font-semibold mb-8"
                >
                    <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                    Arming Local Businesses with AI
                </motion.div>

                {/* Headline */}
                <h1 className="text-hero font-extrabold text-text-dark mb-6">
                    {config?.hooks?.headline ? (
                        <span className="text-text-dark">{config.hooks.headline}</span>
                    ) : (
                        <>
                            The AI Revolution is Here.
                            <br />
                            <span className="text-text-muted font-bold">Let's Use It to Protect the</span>
                            <br />
                            <span className="relative inline-block h-[1.15em] overflow-hidden align-bottom">
                                <AnimatePresence mode="wait">
                                    <motion.span
                                        key={wordIndex}
                                        initial={{ y: 40, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        exit={{ y: -40, opacity: 0 }}
                                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                        className="inline-block font-serif italic text-accent"
                                    >
                                        {CYCLING_WORDS[wordIndex]}
                                    </motion.span>
                                </AnimatePresence>
                            </span>
                            <span className="text-text-dark">.</span>
                        </>
                    )}
                </h1>

                {/* Subheadline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto mb-10 leading-relaxed"
                >
                    {config?.hooks?.pain_point_copy ||
                        "Small businesses are the glue of our communities. We install automated Revenue Recovery Systems so local tradesmen never lose another lead while they're on the job."}
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
                >
                    <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                    >
                        {config?.hooks?.cta || 'Arm Your Business'}
                        <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                            <ArrowRight size={18} />
                        </span>
                    </motion.a>
                    <motion.a
                        href="#mission"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-lg border-2 border-text-dark text-text-dark hover:bg-text-dark hover:text-cream transition-all duration-300 cursor-pointer"
                    >
                        Read Our Mission
                    </motion.a>
                </motion.div>

                {/* Floating Glass Cards */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="flex flex-col md:flex-row gap-4 justify-center items-center max-w-3xl mx-auto"
                >
                    <motion.div
                        whileHover={{ y: -4 }}
                        className="glass px-5 py-4 flex items-center gap-3 md:-rotate-2"
                    >
                        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                            <PhoneForwarded size={20} className="text-accent" />
                        </div>
                        <div className="text-left">
                            <p className="font-bold text-sm text-text-dark">Missed Call</p>
                            <p className="text-xs text-text-muted">→ Texted Back Automatically</p>
                        </div>
                    </motion.div>

                    <motion.div
                        whileHover={{ y: -4 }}
                        className="glass px-5 py-4 flex items-center gap-3 md:rotate-1 md:translate-y-2"
                    >
                        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                            <Bot size={20} className="text-accent" />
                        </div>
                        <div className="text-left">
                            <p className="font-bold text-sm text-text-dark">AI Chatbot</p>
                            <p className="text-xs text-text-muted">Lead Qualified 24/7</p>
                        </div>
                    </motion.div>

                    <motion.div
                        whileHover={{ y: -4 }}
                        className="glass px-5 py-4 flex items-center gap-3 md:-rotate-1"
                    >
                        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                            <Star size={20} className="text-accent" />
                        </div>
                        <div className="text-left">
                            <p className="font-bold text-sm text-text-dark">Review Request</p>
                            <p className="text-xs text-text-muted">Sent Automatically</p>
                        </div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
}
