import { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { LogoMarquee } from './components/LogoMarquee';
import { ProblemSection } from './components/ProblemSection';
import { FounderNote } from './components/FounderNote';
import { Solutions } from './components/Solutions';
import { Pricing } from './components/Pricing';
import { TextMarquee } from './components/TextMarquee';
import { Footer } from './components/Footer';

export default function App() {
    useEffect(() => {
        document.documentElement.style.scrollBehavior = 'smooth';
    }, []);

    return (
        <div className="min-h-screen flex flex-col overflow-x-hidden bg-cream">
            <Navbar />

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
            <Footer />
        </div>
    );
}
