import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, PhoneForwarded, Bot, Star } from 'lucide-react';
import { fadeUp, CYCLING_WORDS } from '../constants';

export function Hero() {
    const [wordIndex, setWordIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setWordIndex((prev) => (prev + 1) % CYCLING_WORDS.length);
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-4 pt-32 pb-20 overflow-hidden">
            {/* Premium GHL/Nova Background Effects */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                {/* Main Gradient */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(45,106,79,0.12)_0%,_transparent_50%)]" />
                
                {/* Animated Glowing Blobs */}
                <motion.div 
                    animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                        x: [0, 50, 0],
                        y: [0, -30, 0]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-20 -left-20 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[120px]"
                />
                <motion.div 
                    animate={{ 
                        scale: [1, 1.1, 1],
                        opacity: [0.2, 0.4, 0.2],
                        x: [0, -40, 0],
                        y: [0, 20, 0]
                    }}
                    transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/2 -right-20 w-[500px] h-[500px] bg-accent-light/15 rounded-full blur-[100px]"
                />
                
                {/* Grid Overlay for "Digital" feel */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] mix-blend-overlay" />
            </div>

            <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="relative z-10 max-w-5xl mx-auto"
            >
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="inline-flex items-center gap-2 bg-white/40 backdrop-blur-md border border-white/40 text-accent-dark px-5 py-2 rounded-full text-sm font-semibold mb-10 shadow-sm"
                >
                    <span className="w-2 h-2 rounded-full bg-accent animate-pulse shadow-[0_0_8px_rgba(45,106,79,0.6)]" />
                    Arming Local Businesses with AI
                </motion.div>

                {/* Headline */}
                <h1 className="text-hero font-extrabold text-text-dark mb-8 tracking-tight">
                    The AI Revolution is Here.
                    <br />
                    <span className="text-text-muted/80 font-bold">Let's Use It to Protect the</span>
                    <br />
                    <span className="relative inline-block min-w-[320px] h-[1.15em] overflow-hidden align-bottom">
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={wordIndex}
                                initial={{ y: 50, opacity: 0, rotateX: 30 }}
                                animate={{ y: 0, opacity: 1, rotateX: 0 }}
                                exit={{ y: -50, opacity: 0, rotateX: -30 }}
                                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                className="inline-block font-serif italic text-accent drop-shadow-sm"
                            >
                                {CYCLING_WORDS[wordIndex]}
                            </motion.span>
                        </AnimatePresence>
                    </span>
                    <span className="text-text-dark">.</span>
                </h1>

                {/* Subheadline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto mb-12 leading-relaxed"
                >
                    Small businesses are the glue of our communities. We install <span className="text-text-dark font-semibold">Automated Revenue Recovery Systems</span> so local tradesmen never lose another lead while they're on the job.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-20"
                >
                    <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -10px rgba(45,106,79,0.3)" }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-flex items-center gap-3 bg-accent text-white px-10 py-5 rounded-full font-bold text-lg shadow-xl hover:bg-accent-dark transition-all duration-300 cursor-pointer"
                    >
                        Arm Your Business
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </motion.a>
                    <motion.a
                        href="#mission"
                        whileHover={{ scale: 1.05, backgroundColor: "rgba(26,26,26,0.05)" }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-flex items-center gap-2 px-10 py-5 rounded-full font-bold text-lg border-2 border-text-dark/20 text-text-dark backdrop-blur-sm transition-all duration-300 cursor-pointer"
                    >
                        Read Our Mission
                    </motion.a>
                </motion.div>

                {/* Floating Glass Cards */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
                >
                    {[
                        { icon: PhoneForwarded, label: "Missed Call", desc: "→ Texted Back Automatically", rotate: "-rotate-1" },
                        { icon: Bot, label: "AI Chatbot", desc: "Lead Qualified 24/7", rotate: "rotate-0", y: "translate-y-2" },
                        { icon: Star, label: "Review Request", desc: "Sent Automatically", rotate: "rotate-1" }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -6, rotate: 0 }}
                            className={`glass px-8 py-6 flex items-center gap-5 ${item.rotate} ${item.y || ''} border-white/50`}
                        >
                            <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center shrink-0">
                                <item.icon size={28} className="text-accent" />
                            </div>
                            <div className="text-left">
                                <p className="font-bold text-lg text-text-dark">{item.label}</p>
                                <p className="text-sm text-text-muted">{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
}
