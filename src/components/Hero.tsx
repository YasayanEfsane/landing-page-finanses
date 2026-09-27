import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import ProductMockup from './ProductMockup';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-finance-dark noise-overlay">
      {/* Background gradients */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-finance-blue/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-finance-cyan/5 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-finance-blue/3 rounded-full blur-[150px]" />
        {/* Subtle grid */}
        <div className="absolute inset-0 grid-bg opacity-40" />
        {/* Radial fade at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-finance-dark to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-16 w-full">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 glass">
            <div className="w-1.5 h-1.5 rounded-full bg-finance-cyan animate-pulse-subtle" />
            <span className="text-white/60 text-xs font-medium tracking-wide">
              Yapay zekâ destekli finansal otomasyon
            </span>
          </div>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6"
        >
          Ön muhasebenizi
          <br />
          <span className="gradient-text">yapay zekâya</span>
          <br />
          bırakın.
        </motion.h1>

        {/* Supporting copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center text-white/50 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          FinanSes; ön muhasebe ve sipariş yönetimi süreçlerini yapay zekâ ile
          daha akıllı, düzenli ve erişilebilir bir deneyime dönüştürür.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6"
        >
          <a
            href="#kesfet"
            className="group flex items-center gap-2 px-7 py-3.5 rounded-full bg-finance-blue text-white text-sm font-medium hover:bg-finance-accent transition-all duration-300 hover:shadow-xl hover:shadow-finance-blue/25"
          >
            FinanSes'i Keşfet
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
          <a
            href="#nasil-calisir"
            className="flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/15 text-white/70 text-sm font-medium hover:bg-white/5 hover:text-white transition-all duration-300"
          >
            Nasıl Çalışır?
          </a>
        </motion.div>

        {/* Trust microcopy */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center text-white/25 text-xs tracking-wider"
        >
          Ön muhasebe • Sipariş yönetimi • Yapay zekâ
        </motion.p>

        {/* Product mockup */}
        <div className="mt-16 md:mt-20">
          <ProductMockup />
        </div>
      </div>

      {/* Bottom gradient transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-finance-warm-white to-transparent pointer-events-none" />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={20} className="text-white/25" />
        </motion.div>
      </motion.div>
    </section>
  );
}
