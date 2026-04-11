import React from 'react';
import { Truck, RefreshCw, ShieldCheck, Headset } from 'lucide-react';
import { motion } from 'framer-motion';
import { useDraggable } from '../../hooks/useDraggable';

const FeaturesSection = () => {
    const dragProps = useDraggable();
    const features = [
        {
            id: 1,
            icon: <Truck size={28} strokeWidth={1.5} />,
            title: "Free Shipping",
            desc: "On orders above ₹999",
            bg: "bg-gradient-to-br from-[#03045e] via-[#0077b6] to-[#00b4d8]",
            shadow: "shadow-xl shadow-[#03045e]/30 hover:shadow-2xl hover:shadow-[#03045e]/50"
        },
        {
            id: 2,
            icon: <RefreshCw size={28} strokeWidth={1.5} />,
            title: "Easy Returns",
            desc: "15-day return policy",
            bg: "bg-gradient-to-br from-[#ff4d6d] via-[#ff758f] to-[#ff8fa3]",
            shadow: "shadow-xl shadow-[#ff4d6d]/30 hover:shadow-2xl hover:shadow-[#ff4d6d]/50"
        },
        {
            id: 3,
            icon: <ShieldCheck size={28} strokeWidth={1.5} />,
            title: "Secure Checkout",
            desc: "100% protected payments",
            bg: "bg-gradient-to-br from-[#cc8b86] via-[#d89a95] to-[#e2a09b]",
            shadow: "shadow-xl shadow-[#cc8b86]/30 hover:shadow-2xl hover:shadow-[#cc8b86]/50"
        },
        {
            id: 4,
            icon: <Headset size={28} strokeWidth={1.5} />,
            title: "24/7 Support",
            desc: "Dedicated help desk",
            bg: "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700",
            shadow: "shadow-xl shadow-slate-900/30 hover:shadow-2xl hover:shadow-slate-900/50"
        }
    ];

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
    };

    return (
        <section className="py-12 md:py-16 bg-white border-t border-gray-100 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                <motion.div 
                    {...dragProps}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="flex lg:grid lg:grid-cols-4 gap-4 md:gap-6 overflow-x-auto lg:overflow-visible snap-x snap-mandatory pt-2 pb-6 lg:pb-2 cursor-grab lg:cursor-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                >
                    {features.map((feature) => (
                        <motion.div 
                            key={feature.id}
                            variants={itemVariants}
                            whileHover={{ y: -6, scale: 1.02 }}
                            className={`${feature.bg} rounded-xl border border-transparent px-4 py-3 md:p-6 flex items-center gap-4 transition-all duration-300 ${feature.shadow} group shrink-0 w-[220px] sm:w-[280px] md:w-[250px] lg:w-auto snap-center lg:snap-align-none select-none`}
                        >
                            <div 
                                className="w-12 h-12 md:w-14 md:h-14 shrink-0 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white group-hover:scale-105 group-hover:rotate-6 transition-all duration-500"
                                style={{ boxShadow: "0 8px 16px rgba(0,0,0,0.1), inset 0 2px 4px rgba(255,255,255,0.4)" }}
                            >
                                {feature.icon}
                            </div>
                            <div>
                                <h4 className="font-bold text-white text-[15px] md:text-base tracking-tight mb-0.5">{feature.title}</h4>
                                <p className="text-white/90 text-[11px] md:text-sm font-medium">{feature.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default FeaturesSection;
