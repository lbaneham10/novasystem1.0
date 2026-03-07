import { motion } from 'motion/react';
import { ArrowRight, Check } from 'lucide-react';
import { fadeUp, staggerContainer, PRICING_TIERS } from '../constants';

export function Pricing() {
    return (
        <section id="pricing" className="py-20 md:py-32 bg-cream">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-80px' }}
                    variants={fadeUp}
                    className="text-center mb-16"
                >
                    <h2 className="text-section font-extrabold text-text-dark mb-4">
                        Transparent Pricing. No Surprises.
                    </h2>
                    <p className="text-lg text-text-muted max-w-2xl mx-auto leading-relaxed">
                        Every plan includes a dedicated onboarding specialist and 24/7 system monitoring.
                    </p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-80px' }}
                    variants={staggerContainer}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch"
                >
                    {PRICING_TIERS.map((tier) => (
                        <motion.div
                            key={tier.name}
                            variants={fadeUp}
                            whileHover={{ y: -8 }}
                            transition={{ duration: 0.3 }}
                            className={`relative rounded-[32px] p-8 flex flex-col cursor-pointer transition-shadow duration-300 ${tier.highlighted
                                    ? 'bg-card card-float ring-2 ring-accent scale-[1.02] md:scale-105 z-10 shadow-xl'
                                    : 'glass hover:shadow-lg'
                                }`}
                        >
                            {/* Badge */}
                            {tier.badge && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white px-5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                                    {tier.badge}
                                </div>
                            )}

                            {/* Tier Name */}
                            <h3 className="text-xl font-bold text-text-dark mb-6">{tier.name}</h3>

                            {/* Price */}
                            <div className="mb-6">
                                <div className="mb-1">
                                    <span className="text-sm text-text-muted">Setup: </span>
                                    <span className="text-lg font-bold text-text-dark">{tier.setup}</span>
                                </div>
                                <div>
                                    <span className="text-4xl font-extrabold text-text-dark">
                                        {tier.monthly.split('/')[0]}
                                    </span>
                                    <span className="text-text-muted text-lg">/mo</span>
                                </div>
                            </div>

                            {/* Divider */}
                            <div className="h-px bg-text-dark/10 mb-6" />

                            {/* Features */}
                            <ul className="space-y-3 mb-8 flex-grow">
                                {tier.features.map((feature) => (
                                    <li key={feature} className="flex items-start gap-3">
                                        <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                                            <Check size={12} className="text-accent" />
                                        </div>
                                        <span className="text-text-muted text-sm">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* CTA */}
                            <motion.a
                                href="#contact"
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                className={`flex items-center justify-center gap-2 py-4 rounded-full font-bold text-base transition-all duration-300 cursor-pointer ${tier.highlighted
                                        ? 'bg-accent text-white hover:bg-accent-light shadow-lg'
                                        : 'border-2 border-text-dark text-text-dark hover:bg-text-dark hover:text-cream'
                                    }`}
                            >
                                {tier.cta}
                                <ArrowRight size={18} />
                            </motion.a>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
