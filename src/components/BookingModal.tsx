import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, User, Mail, Phone, Building2, ArrowRight } from 'lucide-react';

interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function BookingModal({ isOpen, onClose }: BookingModalProps) {
    const [step, setStep] = useState<1 | 2>(1);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        business: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleNext = (e: React.FormEvent) => {
        e.preventDefault();
        setStep(2);
    };

    // Replace this with your actual Cal.com event link (e.g., 'your-username/15min')
    const CAL_LINK = "luke-baneham-hidxcr/15min"; 

    // Construct the prefill URL so when they open Cal.com, their details are already typed in
    const iframeSrc = `https://cal.com/${CAL_LINK}?name=${encodeURIComponent(formData.name)}&email=${encodeURIComponent(formData.email)}&notes=${encodeURIComponent(`Business Name: ${formData.business} \nPhone: ${formData.phone}`)}`;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-[999] bg-black/60 backdrop-blur-sm"
                    />

                    {/* Modal Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        className="fixed inset-0 z-[1000] m-auto max-w-2xl w-[95%] h-[90vh] md:h-[80vh] bg-deep/95 border border-white/10 shadow-2xl rounded-3xl overflow-hidden flex flex-col"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-white/10 bg-deep sticky top-0 z-10">
                            <div>
                                <h3 className="text-xl font-bold text-text-light">
                                    {step === 1 ? 'Free Consultation' : 'Select a Time'}
                                </h3>
                                <p className="text-sm text-text-light-muted">
                                    {step === 1 ? 'Tell us a bit about your business first.' : 'Pick a time that works best for you.'}
                                </p>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-2 rounded-full bg-white/5 text-text-light hover:bg-white/10 transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Body */}
                        <div className="flex-grow overflow-y-auto relative">
                            {step === 1 ? (
                                <form onSubmit={handleNext} className="p-6 md:p-10 space-y-6">
                                    <div className="relative">
                                        <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-light-muted" />
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Your Full Name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-12 py-4 text-text-light placeholder-text-light-muted focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                                        />
                                    </div>
                                    <div className="relative">
                                        <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-light-muted" />
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Email Address"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-12 py-4 text-text-light placeholder-text-light-muted focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                                        />
                                    </div>
                                    <div className="relative">
                                        <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-light-muted" />
                                        <input
                                            type="tel"
                                            name="phone"
                                            placeholder="Phone Number"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-12 py-4 text-text-light placeholder-text-light-muted focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                                        />
                                    </div>
                                    <div className="relative">
                                        <Building2 size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-light-muted" />
                                        <input
                                            type="text"
                                            name="business"
                                            placeholder="Business Name (e.g., Joe's Plumbing)"
                                            value={formData.business}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-12 py-4 text-text-light placeholder-text-light-muted focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                                        />
                                    </div>

                                    <motion.button
                                        type="submit"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full mt-4 bg-accent text-white py-4 rounded-xl font-bold text-lg hover:bg-accent-light transition-colors duration-300 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(45,106,79,0.3)]"
                                    >
                                        See Available Times
                                        <ArrowRight size={20} />
                                    </motion.button>
                                </form>
                            ) : (
                                <div className="w-full h-full bg-white">
                                    <iframe
                                        src={iframeSrc}
                                        width="100%"
                                        height="100%"
                                        frameBorder="0"
                                        className="w-full h-full"
                                        title="Cal.com Booking"
                                    ></iframe>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
