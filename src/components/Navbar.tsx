import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight } from 'lucide-react';

const NAV_LINKS = [
    { label: 'Mission', href: '#mission' },
    { label: 'Solutions', href: '#solutions' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Contact', href: '#contact' },
];
interface NavbarProps {
    onOpenBooking: () => void;
}

export function Navbar({ onOpenBooking }: NavbarProps) {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [mobileOpen]);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        setMobileOpen(false);
        const el = document.querySelector(href);
        if (el) {
            const offset = 80;
            const top = el.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className={`fixed top-4 left-4 right-4 z-50 rounded-full px-6 py-3 transition-all duration-500 ${scrolled
                    ? 'bg-cream/80 backdrop-blur-xl shadow-lg border border-white/40'
                    : 'bg-transparent'
                    }`}
            >
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    {/* Logo */}
                    <a href="#" className="flex items-center gap-2 group cursor-pointer">
                        <div className="w-9 h-9 rounded-xl bg-accent flex items-center justify-center">
                            <span className="text-white font-extrabold text-lg">
                                N
                            </span>
                        </div>
                        <span className="font-extrabold text-xl tracking-tight text-text-dark">
                            Nova<span className="text-accent">Systems</span>
                        </span>
                    </a>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {NAV_LINKS.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className="text-sm font-medium text-text-muted hover:text-accent transition-colors duration-200 cursor-pointer"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* Desktop Actions */}
                    <div className="hidden md:flex items-center gap-4">
                        <a 
                            href="tel:+15555555555"
                            className="flex items-center gap-2 text-sm font-bold text-accent hover:text-accent-dark transition-colors duration-200"
                        >
                            📞 (555) 555-5555
                        </a>
                        <button
                            onClick={() => {
                                setMobileOpen(false);
                                onOpenBooking();
                            }}
                            className="inline-flex items-center gap-2 bg-accent text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-accent-light transition-all duration-300 cursor-pointer hover:shadow-lg hover:-translate-y-0.5"
                        >
                            Book Consultation
                            <ArrowRight size={16} />
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="md:hidden p-2 cursor-pointer"
                        aria-label="Toggle navigation menu"
                    >
                        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Overlay */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 bg-cream flex flex-col items-center justify-center gap-8"
                    >
                        {NAV_LINKS.map((link, i) => (
                            <motion.a
                                key={link.href}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1, duration: 0.4 }}
                                className="text-3xl font-bold text-text-dark hover:text-accent transition-colors cursor-pointer"
                            >
                                {link.label}
                            </motion.a>
                        ))}
                        <motion.button
                            onClick={() => {
                                setMobileOpen(false);
                                onOpenBooking();
                            }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.4 }}
                            className="mt-4 bg-accent text-white px-8 py-4 rounded-full font-bold text-lg cursor-pointer flex items-center gap-2"
                        >
                            Book Consultation <ArrowRight size={20} />
                        </motion.button>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
