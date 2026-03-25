import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { LogoMarquee } from './components/LogoMarquee';
import { ProblemSection } from './components/ProblemSection';
import { FounderNote } from './components/FounderNote';
import { Solutions } from './components/Solutions';
import { Pricing } from './components/Pricing';
import { TextMarquee } from './components/TextMarquee';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal'; // Import the new modal

export default function App() {
    const [isBookingOpen, setIsBookingOpen] = useState(false);

    useEffect(() => {
        document.documentElement.style.scrollBehavior = 'smooth';
    }, []);

    return (
        <div className="min-h-screen flex flex-col overflow-x-hidden bg-cream">
            <Navbar onOpenBooking={() => setIsBookingOpen(true)} />

            <main className="flex-grow">
                {/* A. Hero — Emotional Hook */}
                <Hero />

                {/* B. Logo Marquee — Social Proof */}
                <LogoMarquee />

                {/* C. The Problem — Agitation & Empathy */}
                <ProblemSection />

                {/* D. Founder's Note — The Human Heart */}
                <FounderNote />

                {/* E. Solutions — Our Ecosystem */}
                <Solutions />

                {/* F. Pricing — Transparent Structure */}
                <Pricing />

                {/* G. Text Marquee — Movement Strip */}
                <TextMarquee />
            </main>

            {/* H. Footer / Final CTA */}
            <Footer onOpenBooking={() => setIsBookingOpen(true)} />

            {/* Floating Booking Tab */}
            <button
                onClick={() => setIsBookingOpen(true)}
                className="fixed bottom-6 right-6 z-40 bg-accent text-white px-6 py-4 rounded-full font-bold shadow-2xl hover:bg-accent-light hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(45,106,79,0.5)] transition-all duration-300 flex items-center gap-3"
            >
                <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
                Book Free Consultation
            </button>

            {/* Booking Modal Popup */}
            <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
        </div>
    );
}
