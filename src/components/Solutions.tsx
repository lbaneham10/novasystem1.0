import { motion } from 'motion/react';
import { Monitor, Inbox, ShieldCheck } from 'lucide-react';
import { fadeUp, staggerContainer, SOLUTIONS } from '../constants';

const ICON_MAP: Record<string, React.FC<{ size?: number; className?: string }>> = {
    Monitor,
    Inbox,
    ShieldCheck,
};

export function Solutions() {
    return (
        <section id="solutions" className="py-20 md:py-32 bg-cream">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-80px' }}
                    variants={fadeUp}
                    className="text-center mb-16"
                >
                    <h2 className="text-section font-extrabold text-text-dark mb-4">
                        Our Ecosystem
                    </h2>
                    <p className="text-lg text-text-muted max-w-2xl mx-auto leading-relaxed">
                        A fully integrated system designed to capture, convert, and retain every customer
                        that comes your way.
                    </p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-80px' }}
                    variants={staggerContainer}
                    className="space-y-12"
                >
                    {SOLUTIONS.map((solution, index) => {
                        const IconComponent = ICON_MAP[solution.icon];
                        const isEven = index % 2 === 0;

                        return (
                            <motion.div
                                key={solution.title}
                                variants={fadeUp}
                                className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                                    } items-center gap-8 md:gap-12`}
                            >
                                {/* Mockup Image */}
                                <div className="w-full md:w-1/2">
                                    <motion.div
                                        whileHover={{ scale: 1.02 }}
                                        transition={{ duration: 0.3 }}
                                        className="bg-card rounded-3xl p-2 sm:p-4 card-float shadow-xl flex items-center justify-center cursor-pointer overflow-hidden aspect-[4/3] relative"
                                    >
                                        <img
                                            src={solution.image}
                                            alt={solution.title}
                                            className="w-full h-full object-cover rounded-2xl"
                                        />
                                        <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-3xl pointer-events-none"></div>
                                    </motion.div>
                                </div>

                                {/* Text */}
                                <div className="w-full md:w-1/2">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                                            {IconComponent && (
                                                <IconComponent size={22} className="text-accent" />
                                            )}
                                        </div>
                                        <span className="text-xs font-bold text-accent uppercase tracking-widest">
                                            Solution {String(index + 1).padStart(2, '0')}
                                        </span>
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-extrabold text-text-dark mb-4 leading-tight">
                                        {solution.title}
                                    </h3>
                                    <p className="text-text-muted text-lg leading-relaxed">
                                        {solution.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
