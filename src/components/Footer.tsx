import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Phone } from 'lucide-react';
import { fadeUp } from '../constants';
import { NovaLogo } from './NovaLogo';

interface FooterProps {
    onOpenBooking: () => void;
}

export function Footer({ onOpenBooking }: FooterProps) {
    return (
        <footer id="contact" className="bg-deep py-20 md:py-32">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                {/* CTA Section (No more complex form, just a beautiful direct conversion path) */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-80px' }}
                    variants={fadeUp}
                    className="text-center mb-16"
                >
                    <h2 className="text-section font-extrabold text-text-light mb-6">
                        Ready to evolve?
                    </h2>
                    <p className="text-lg text-text-light-muted max-w-2xl mx-auto leading-relaxed mb-10">
                        Book a free 15-minute discovery call. We'll show you exactly how much revenue is
                        slipping through the cracks — and how to plug the leaks.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <motion.button
                            onClick={onOpenBooking}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.97 }}
                            className="inline-flex items-center gap-3 bg-accent text-white px-10 py-5 rounded-full font-bold text-lg shadow-[0_0_40px_rgba(45,106,79,0.4)] hover:shadow-[0_0_60px_rgba(45,106,79,0.6)] transition-all duration-300 cursor-pointer border-none"
                        >
                            Schedule Your Strategy Call
                            <span className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                                <ArrowRight size={20} />
                            </span>
                        </motion.button>
                        
                        <motion.a
                            href="tel:+18203483482"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.97 }}
                            className="inline-flex items-center gap-3 bg-white/5 border border-white/10 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-300 cursor-pointer"
                        >
                            <Phone size={20} className="text-accent" />
                            Call: (820) 348-3482
                        </motion.a>
                    </div>
                </motion.div>

                {/* Footer Bottom */}
                <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <NovaLogo size={32} />
                        <span className="font-bold text-text-light text-lg">NovaSystems</span>
                    </div>

                    <p className="text-text-light-muted text-sm">
                        © 2026 Nova Systems. All rights reserved.
                    </p>

                    <div className="flex items-center gap-6">
                        <a href="#" className="text-text-light-muted text-sm hover:text-text-light transition-colors cursor-pointer">
                            Privacy
                        </a>
                        <a href="#" className="text-text-light-muted text-sm hover:text-text-light transition-colors cursor-pointer">
                            Terms
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
