import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Send, User, Mail, Phone, Building2, MessageSquare } from 'lucide-react';
import { fadeUp } from '../constants';

export function Footer() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        business: '',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        // Reset after 4 seconds
        setTimeout(() => {
            setSubmitted(false);
            setFormData({ name: '', email: '', phone: '', business: '', message: '' });
        }, 4000);
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    return (
        <footer id="contact" className="bg-deep py-20 md:py-32">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                {/* CTA Section */}
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
                        <motion.a
                            href="#contact-form"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.97 }}
                            className="inline-flex items-center gap-3 bg-accent text-white px-10 py-5 rounded-full font-bold text-lg shadow-[0_0_40px_rgba(45,106,79,0.4)] hover:shadow-[0_0_60px_rgba(45,106,79,0.6)] transition-all duration-300 cursor-pointer"
                        >
                            Schedule Your Strategy Call
                            <span className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                                <ArrowRight size={20} />
                            </span>
                        </motion.a>
                        
                        <motion.a
                            href="tel:+15555555555"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.97 }}
                            className="inline-flex items-center gap-3 bg-white/5 border border-white/10 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-300 cursor-pointer"
                        >
                            <Phone size={20} className="text-accent" />
                            Call: (555) 555-5555
                        </motion.a>
                    </div>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                    id="contact-form"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-80px' }}
                    variants={fadeUp}
                    className="max-w-2xl mx-auto"
                >
                    {submitted ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="glass-dark p-12 text-center"
                        >
                            <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6">
                                <Send size={28} className="text-accent-light" />
                            </div>
                            <h3 className="text-2xl font-bold text-text-light mb-3">Message Sent!</h3>
                            <p className="text-text-light-muted">
                                We'll be in touch within 24 hours. Your business is about to evolve.
                            </p>
                        </motion.div>
                    ) : (
                        <form onSubmit={handleSubmit} className="glass-dark p-8 space-y-5">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div className="relative">
                                    <label htmlFor="contact-name" className="sr-only">Your Name</label>
                                    <User
                                        size={18}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 text-text-light-muted"
                                    />
                                    <input
                                        id="contact-name"
                                        type="text"
                                        name="name"
                                        placeholder="Your Name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-12 py-3.5 text-text-light placeholder-text-light-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                                    />
                                </div>
                                <div className="relative">
                                    <label htmlFor="contact-email" className="sr-only">Email</label>
                                    <Mail
                                        size={18}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 text-text-light-muted"
                                    />
                                    <input
                                        id="contact-email"
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-12 py-3.5 text-text-light placeholder-text-light-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                                    />
                                </div>
                                <div className="relative">
                                    <label htmlFor="contact-phone" className="sr-only">Phone</label>
                                    <Phone
                                        size={18}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 text-text-light-muted"
                                    />
                                    <input
                                        id="contact-phone"
                                        type="tel"
                                        name="phone"
                                        placeholder="Phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-12 py-3.5 text-text-light placeholder-text-light-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                                    />
                                </div>
                                <div className="relative">
                                    <label htmlFor="contact-business" className="sr-only">Business Name</label>
                                    <Building2
                                        size={18}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 text-text-light-muted"
                                    />
                                    <input
                                        id="contact-business"
                                        type="text"
                                        name="business"
                                        placeholder="Business Name"
                                        value={formData.business}
                                        onChange={handleChange}
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-12 py-3.5 text-text-light placeholder-text-light-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                                    />
                                </div>
                            </div>

                            <div className="relative">
                                <label htmlFor="contact-message" className="sr-only">Tell us about your business</label>
                                <MessageSquare
                                    size={18}
                                    className="absolute left-4 top-4 text-text-light-muted"
                                />
                                <textarea
                                    id="contact-message"
                                    name="message"
                                    placeholder="Tell us about your business and what challenges you're facing..."
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={4}
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-12 py-3.5 text-text-light placeholder-text-light-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all resize-none"
                                />
                            </div>

                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full bg-accent text-white py-4 rounded-full font-bold text-lg hover:bg-accent-light transition-colors duration-300 cursor-pointer flex items-center justify-center gap-2"
                            >
                                Send Message
                                <ArrowRight size={20} />
                            </motion.button>
                        </form>
                    )}
                </motion.div>

                {/* Footer Bottom */}
                <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg bg-accent flex items-center justify-center">
                            <span className="text-white font-extrabold text-sm">N</span>
                        </div>
                        <span className="font-bold text-text-light text-sm">Nova Systems</span>
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
