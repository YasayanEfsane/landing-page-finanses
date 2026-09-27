import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  FileText,
  Layers,
  Package,
  Clock,
  AlertTriangle,
  Brain,
  Workflow,
  BarChart3,
  MessageSquare,
  Zap,
  Shield,
  Layout,
  Database,
  Bot,
  Users,
  Store,
  ShoppingCart,
  ClipboardList,
  Check,
  ArrowRight,
} from 'lucide-react';

function AnimatedSection({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ===== VALUE STRIP ===== */
export function ValueStrip() {
  return (
    <section className="relative py-20 md:py-28 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection className="text-center">
          <p className="text-finance-text-light text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Yapay zekâ destekli otonom ön muhasebe ve sipariş yönetimi sistemleri ile
            <span className="text-finance-text font-medium"> finansal süreçlerinizi tek platformda</span> yönetin.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2} className="mt-12">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {[
              { value: 'Akıllı', label: 'Otomasyon' },
              { value: 'Merkezi', label: 'Yönetim' },
              { value: 'Entegre', label: 'Veri Akışı' },
              { value: 'Doğal Dil', label: 'Etkileşim' },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <p className="text-finance-text text-lg md:text-xl font-semibold">{item.value}</p>
                <p className="text-finance-text-light text-xs mt-1">{item.label}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ===== PROBLEM SECTION ===== */
export function ProblemSection() {
  const problems = [
    { icon: FileText, label: 'Manuel veri girişi', desc: 'Tekrarlayan girişler' },
    { icon: Layers, label: 'Dağınık bilgiler', desc: 'Parçalı veri yapısı' },
    { icon: Package, label: 'Sipariş takibi', desc: 'Koordinasyon zorluğu' },
    { icon: Clock, label: 'Zaman kaybı', desc: 'Verimsiz süreçler' },
    { icon: AlertTriangle, label: 'Hata riski', desc: 'Operasyonel açıklar' },
  ];

  return (
    <section id="cozum" className="relative py-32 md:py-44 bg-finance-warm-white">
      {/* Subtle top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-finance-text tracking-tight leading-[1.1]">
              Finansal süreçler
              <br />
              neden bu kadar
              <br />
              <span className="text-finance-text-light">karmaşık?</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="lg:pt-4">
              <p className="text-finance-text-light text-lg md:text-xl max-w-lg leading-relaxed mb-8">
                Gerçek sorun tek bir görev değil. Küçük görevlerin parçalanmışlığı.
                Her biri ayrı bir ekranda, ayrı bir süreçte, ayrı bir hatırlatmada.
              </p>
              <p className="text-finance-text/40 text-sm italic">
                "Süreçlerin parçalanmışlığı, verimliliğin en büyük düşmanıdır."
              </p>
            </div>
          </AnimatedSection>
        </div>

        <div className="mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {problems.map((problem, i) => (
            <AnimatedSection key={problem.label} delay={0.08 * i}>
              <div className="group p-5 md:p-6 rounded-2xl border border-gray-100 bg-white hover:border-finance-blue/15 hover:shadow-sm transition-all duration-300 card-hover">
                <problem.icon size={18} className="text-finance-text/30 mb-3 group-hover:text-finance-blue/60 transition-colors" />
                <p className="text-sm font-medium text-finance-text/70 mb-1">{problem.label}</p>
                <p className="text-xs text-finance-text/30">{problem.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===== SOLUTION SECTION ===== */
export function SolutionSection() {
  const steps = [
    { label: 'VERİ', desc: 'Finansal verileriniz toplanır', icon: Database },
    { label: 'YAPAY ZEKÂ', desc: 'Akıllı analiz ve sınıflandırma', icon: Brain },
    { label: 'OTOMASYON', desc: 'Süreçler otomatik işlenir', icon: Workflow },
    { label: 'DÜZENLİ İŞ AKIŞI', desc: 'Kontrollü ve şeffaf sonuç', icon: BarChart3 },
  ];

  return (
    <section id="nasil-calisir" className="relative py-32 md:py-44 bg-finance-dark noise-overlay overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-finance-blue/5 rounded-full blur-[120px]" />
      <div className="absolute top-1/4 right-0 w-[300px] h-[300px] bg-finance-cyan/3 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection className="text-center mb-20 md:mb-28">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]">
            FinanSes karmaşayı
            <br />
            <span className="gradient-text">tek bir akışta</span> toplar.
          </h2>
        </AnimatedSection>

        {/* Flow diagram */}
        <div className="flex flex-col items-center gap-0">
          {steps.map((step, i) => (
            <AnimatedSection key={step.label} delay={0.15 * i} className="flex flex-col items-center w-full">
              <motion.div
                whileHover={{ scale: 1.01, y: -2 }}
                className="flex items-center gap-5 px-6 md:px-8 py-5 rounded-2xl border border-white/[0.08] bg-white/[0.03] glass w-full max-w-lg transition-all duration-300 hover:border-finance-blue/20"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-finance-blue/15 to-finance-cyan/10 flex items-center justify-center border border-white/5">
                  <step.icon size={18} className="text-finance-light-blue" />
                </div>
                <div>
                  <span className="text-white/85 text-sm font-medium tracking-wide block">{step.label}</span>
                  <span className="text-white/30 text-xs mt-0.5 block">{step.desc}</span>
                </div>
                <div className="ml-auto hidden md:block">
                  <span className="text-white/15 text-xs font-mono">0{i + 1}</span>
                </div>
              </motion.div>
              {i < steps.length - 1 && (
                <div className="flex flex-col items-center py-2">
                  <motion.div
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
                    viewport={{ once: true }}
                    className="w-px h-6 flow-line origin-top"
                  />
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.5 + i * 0.15 }}
                    viewport={{ once: true }}
                    className="w-1.5 h-1.5 rounded-full bg-finance-blue/40"
                  />
                </div>
              )}
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===== PRODUCT SHOWCASE ===== */
export function ProductShowcase() {
  const screens = [
    {
      num: '01',
      title: 'Finansal Özet',
      desc: 'Gelir, gider ve nakit akışınızı tek ekranda görün.',
      icon: BarChart3,
      mockup: (
        <div className="space-y-2">
          <div className="flex gap-2">
            <div className="flex-1 p-2 rounded-lg bg-white/80 border border-gray-100">
              <p className="text-[9px] text-finance-text/40">Gelir</p>
              <p className="text-xs font-semibold text-finance-text">₺284K</p>
            </div>
            <div className="flex-1 p-2 rounded-lg bg-white/80 border border-gray-100">
              <p className="text-[9px] text-finance-text/40">Net</p>
              <p className="text-xs font-semibold text-green-600">+₺142K</p>
            </div>
          </div>
          <div className="flex items-end gap-1 h-10 px-1">
            {[30, 50, 35, 65, 45, 80, 60].map((h, i) => (
              <div key={i} className="flex-1 rounded-sm bg-gradient-to-t from-finance-blue/30 to-finance-cyan/20" style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>
      ),
    },
    {
      num: '02',
      title: 'Sipariş Yönetimi',
      desc: 'Tüm siparişlerinizi tek bir akışta takip edin.',
      icon: Package,
      mockup: (
        <div className="space-y-1.5">
          {['Yeni sipariş', 'Kargoda', 'Teslim edildi'].map((s, i) => (
            <div key={s} className="flex items-center gap-2 px-2 py-1.5 rounded-md bg-white/80 border border-gray-100">
              <div className={`w-1.5 h-1.5 rounded-full ${i === 0 ? 'bg-finance-blue' : i === 1 ? 'bg-yellow-400' : 'bg-green-400'}`} />
              <span className="text-[10px] text-finance-text/60 flex-1">{s}</span>
              <span className="text-[9px] text-finance-text/30">{[3, 5, 12][i]}</span>
            </div>
          ))}
        </div>
      ),
    },
    {
      num: '03',
      title: 'Akıllı Veri İşleme',
      desc: 'Verileriniz otomatik olarak işlenir ve düzenlenir.',
      icon: Database,
      mockup: (
        <div className="flex items-center gap-3">
          <div className="flex-1 space-y-1.5">
            <div className="h-1.5 rounded-full bg-finance-text/5 w-full" />
            <div className="h-1.5 rounded-full bg-finance-text/5 w-3/4" />
            <div className="h-1.5 rounded-full bg-finance-text/5 w-5/6" />
          </div>
          <div className="w-6 h-6 rounded-full bg-finance-blue/10 flex items-center justify-center">
            <ArrowRight size={10} className="text-finance-blue" />
          </div>
          <div className="flex-1 space-y-1.5">
            <div className="h-1.5 rounded-full bg-finance-blue/20 w-full" />
            <div className="h-1.5 rounded-full bg-finance-cyan/20 w-3/4" />
            <div className="h-1.5 rounded-full bg-finance-blue/20 w-5/6" />
          </div>
        </div>
      ),
    },
    {
      num: '04',
      title: 'Yapay Zekâ Asistanı',
      desc: 'Doğal dil ile finansal sorularınıza yanıt alın.',
      icon: Bot,
      mockup: (
        <div className="space-y-2">
          <div className="flex justify-end">
            <div className="px-2 py-1 rounded-md bg-finance-blue/10 text-[10px] text-finance-blue/70">
              Bu ayki giderler?
            </div>
          </div>
          <div className="flex justify-start">
            <div className="px-2 py-1 rounded-md bg-white/80 border border-gray-100 text-[10px] text-finance-text/60">
              ₺142.300 • %3.2 düşüş ✓
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="urun" className="relative py-32 md:py-44 bg-finance-warm-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection className="max-w-3xl mb-20 md:mb-28">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-finance-text tracking-tight leading-[1.1]">
            İhtiyacınız olan finansal akış,
            <br />
            <span className="text-finance-text-light">tek bir yerde.</span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {screens.map((screen, i) => (
            <AnimatedSection key={screen.num} delay={0.1 * i}>
              <div className="group relative p-6 md:p-8 rounded-3xl bg-white border border-gray-100 hover:border-gray-200 transition-all duration-500 hover:shadow-lg card-hover overflow-hidden">
                {/* Subtle gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-finance-blue/[0.02] to-finance-cyan/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-finance-blue/30 text-xs font-mono font-medium">{screen.num}</span>
                    <div className="w-8 h-8 rounded-lg bg-finance-blue/5 flex items-center justify-center group-hover:bg-finance-blue/10 transition-colors">
                      <screen.icon size={14} className="text-finance-blue" />
                    </div>
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-finance-text mb-2">{screen.title}</h3>
                  <p className="text-finance-text-light text-sm leading-relaxed mb-5">{screen.desc}</p>
                  
                  {/* Mini UI mockup */}
                  <div className="p-3 rounded-xl bg-finance-off-white/50 border border-gray-100/80">
                    {screen.mockup}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===== FEATURE SECTION ===== */
export function FeatureSection() {
  const features = [
    {
      num: '01',
      title: 'Ön muhasebe, daha akıllı.',
      desc: 'Yapay zekâ destekli ön muhasebe ile gelir-gider takibi, fatura yönetimi ve finansal raporlama otomatikleşir. Manuel işlemler azalır, doğruluk artar.',
      icon: Brain,
      visual: (
        <div className="space-y-2">
          {[
            { label: 'Gelir Takibi', pct: 85, color: 'from-finance-blue to-finance-cyan' },
            { label: 'Gider Analizi', pct: 62, color: 'from-finance-cyan to-finance-blue' },
            { label: 'Fatura Yönetimi', pct: 94, color: 'from-finance-blue to-finance-cyan' },
          ].map((bar) => (
            <div key={bar.label} className="flex items-center gap-3">
              <span className="text-finance-text/50 text-[10px] w-24">{bar.label}</span>
              <div className="flex-1 h-2 rounded-full bg-gray-100 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${bar.pct}%` }}
                  transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                  viewport={{ once: true }}
                  className={`h-full rounded-full bg-gradient-to-r ${bar.color}`}
                />
              </div>
              <span className="text-finance-text/40 text-[10px] w-8">{bar.pct}%</span>
            </div>
          ))}
        </div>
      ),
    },
    {
      num: '02',
      title: 'Siparişler, tek akışta.',
      desc: 'Tüm siparişleriniz tek bir merkezi akışta. Durum takibi, önceliklendirme ve müşteri ilişkileri bir arada. Karmaşık tablolara son.',
      icon: Package,
      visual: (
        <div className="space-y-2">
          {[
            { id: '#1247', status: 'Tamamlandı', color: 'bg-green-100 text-green-700' },
            { id: '#1246', status: 'İşleniyor', color: 'bg-yellow-100 text-yellow-700' },
            { id: '#1245', status: 'Hazırlanıyor', color: 'bg-finance-blue/10 text-finance-blue' },
          ].map((order) => (
            <div key={order.id} className="flex items-center justify-between px-3 py-2 rounded-lg bg-white border border-gray-100">
              <span className="text-finance-text/60 text-xs font-mono">{order.id}</span>
              <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${order.color}`}>{order.status}</span>
            </div>
          ))}
        </div>
      ),
    },
    {
      num: '03',
      title: 'Veri, anlamlı hale gelsin.',
      desc: 'Dağınık veriler otomatik olarak işlenir, kategorize edilir ve anlamlı raporlara dönüştürülür. Kararlarınız veriye dayansın.',
      icon: Database,
      visual: (
        <div className="grid grid-cols-4 gap-1.5">
          {Array.from({ length: 16 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.03 }}
              viewport={{ once: true }}
              className={`h-8 rounded-md ${
                i % 3 === 0 ? 'bg-finance-blue/15' : i % 3 === 1 ? 'bg-finance-cyan/10' : 'bg-gray-100'
              }`}
            />
          ))}
        </div>
      ),
    },
    {
      num: '04',
      title: 'Rutin işler, otomatikleşsin.',
      desc: 'Tekrarlayan finansal süreçler yapay zekâ tarafından otomatikleştirilir. Siz işinizi büyütmenin yollarına odaklanın.',
      icon: Zap,
      visual: (
        <div className="flex items-center justify-center">
          <div className="relative">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="w-28 h-28 rounded-full border border-dashed border-finance-blue/20"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-finance-blue/10 to-finance-cyan/10 flex items-center justify-center border border-finance-blue/10">
                <Zap size={20} className="text-finance-blue" />
              </div>
            </div>
            {/* Orbiting dots */}
            {[0, 90, 180, 270].map((deg) => (
              <div
                key={deg}
                className="absolute w-2 h-2 rounded-full bg-finance-blue/30"
                style={{
                  top: `${50 + 45 * Math.sin((deg * Math.PI) / 180)}%`,
                  left: `${50 + 45 * Math.cos((deg * Math.PI) / 180)}%`,
                  transform: 'translate(-50%, -50%)',
                }}
              />
            ))}
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="relative py-32 md:py-44 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="space-y-24 md:space-y-32">
          {features.map((feature, i) => (
            <AnimatedSection key={feature.num}>
              <div className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-20`}>
                {/* Text */}
                <div className="flex-1 max-w-lg">
                  <span className="text-finance-blue/30 text-xs font-mono font-medium tracking-wider">{feature.num}</span>
                  <h3 className="text-2xl md:text-4xl font-bold text-finance-text mt-3 mb-4 tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-finance-text-light text-base md:text-lg leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
                {/* Visual */}
                <div className="flex-1 w-full">
                  <div className="relative p-6 md:p-8 rounded-3xl bg-gradient-to-br from-finance-off-white to-white border border-gray-100 card-hover">
                    <div className="flex items-center justify-center min-h-[180px] md:min-h-[220px]">
                      {feature.visual}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===== AI INTERACTION SECTION ===== */
export function AIInteraction() {
  return (
    <section className="relative py-32 md:py-44 bg-finance-dark noise-overlay overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-finance-blue/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-finance-cyan/3 rounded-full blur-[100px]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]">
            FinanSes'e sor.
            <br />
            <span className="gradient-text">O gerisini düzenlesin.</span>
          </h2>
          <p className="text-white/40 text-base md:text-lg max-w-lg mx-auto mt-6">
            Doğal dil ile finansal verilerinize erişin. Yapay zekâ asistanınız her zaman hazır.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="max-w-3xl mx-auto">
            {/* Chat interface */}
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] glass overflow-hidden shadow-2xl shadow-black/20">
              {/* Chat header */}
              <div className="flex items-center gap-3 px-6 py-4 border-b border-white/5 bg-white/[0.01]">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-finance-blue to-finance-cyan flex items-center justify-center shadow-lg shadow-finance-blue/20">
                  <Bot size={15} className="text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-white/85 text-sm font-medium">FinanSes Asistan</p>
                  <p className="text-white/30 text-xs">Yapay zekâ destekli • Çevrimiçi</p>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-green-400/70 text-[10px]">Aktif</span>
                </div>
              </div>

              {/* Messages */}
              <div className="p-6 space-y-5">
                {/* User message */}
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex justify-end"
                >
                  <div className="max-w-[80%] px-4 py-3 rounded-2xl rounded-br-md bg-finance-blue/15 border border-finance-blue/15">
                    <p className="text-white/80 text-sm">Bugünkü siparişlerimi özetle.</p>
                  </div>
                </motion.div>

                {/* AI response */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="flex justify-start"
                >
                  <div className="max-w-[85%] px-4 py-3.5 rounded-2xl rounded-bl-md bg-white/[0.04] border border-white/[0.08]">
                    <p className="text-white/65 text-sm leading-relaxed mb-4">
                      Bugün işlenen siparişleri, durumlarına göre senin için özetledim:
                    </p>
                    {/* Summary cards */}
                    <div className="grid grid-cols-3 gap-2">
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        viewport={{ once: true }}
                        className="p-3 rounded-xl bg-green-500/8 border border-green-500/10"
                      >
                        <p className="text-green-400 text-lg font-semibold">24</p>
                        <p className="text-green-400/50 text-[10px] mt-0.5">Tamamlandı</p>
                      </motion.div>
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        viewport={{ once: true }}
                        className="p-3 rounded-xl bg-yellow-500/8 border border-yellow-500/10"
                      >
                        <p className="text-yellow-400 text-lg font-semibold">8</p>
                        <p className="text-yellow-400/50 text-[10px] mt-0.5">İşleniyor</p>
                      </motion.div>
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        viewport={{ once: true }}
                        className="p-3 rounded-xl bg-finance-blue/8 border border-finance-blue/10"
                      >
                        <p className="text-finance-light-blue text-lg font-semibold">3</p>
                        <p className="text-finance-light-blue/50 text-[10px] mt-0.5">Beklemede</p>
                      </motion.div>
                    </div>
                    {/* Additional AI insight */}
                    <div className="mt-3 pt-3 border-t border-white/5">
                      <p className="text-white/30 text-xs flex items-center gap-1.5">
                        <Zap size={10} className="text-finance-cyan" />
                        Önceki haftaya göre %15 artış var.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Input */}
              <div className="px-6 py-4 border-t border-white/5 bg-white/[0.01]">
                <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-white/10 transition-colors">
                  <MessageSquare size={14} className="text-white/20" />
                  <span className="text-white/20 text-sm flex-1">FinanSes'e bir şey sorun...</span>
                  <div className="w-7 h-7 rounded-lg bg-finance-blue/15 flex items-center justify-center">
                    <ArrowRight size={12} className="text-finance-light-blue" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ===== TRANSFORMATION SECTION ===== */
export function TransformationSection() {
  const before = ['Dağınık belgeler', 'Manuel işlemler', 'Farklı ekranlar', 'Takip zorluğu'];
  const after = ['Tek akış', 'Düzenli veri', 'Otomasyon', 'Daha kontrollü süreç'];

  return (
    <section className="relative py-32 md:py-44 bg-finance-warm-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16 md:mb-20">
          <p className="text-finance-blue text-xs font-medium tracking-wider uppercase mb-4">Dönüşüm</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-finance-text tracking-tight">
            Karmaşadan
            <span className="gradient-text"> düzene.</span>
          </h2>
        </AnimatedSection>

        <div className="relative max-w-5xl mx-auto">
          {/* Center arrow / connector */}
          <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="w-12 h-12 rounded-full bg-gradient-to-br from-finance-blue to-finance-cyan flex items-center justify-center shadow-lg shadow-finance-blue/20"
            >
              <ArrowRight size={18} className="text-white" />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            {/* Before */}
            <AnimatedSection>
              <div className="p-8 rounded-2xl border border-gray-200/80 bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gray-100/50 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="relative">
                  <p className="text-finance-text/30 text-xs font-medium tracking-wider uppercase mb-6">Önce</p>
                  <div className="space-y-4">
                    {before.map((item, i) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-6 h-6 rounded-md bg-gray-100 flex items-center justify-center">
                          <div className="w-1.5 h-1.5 rounded-full bg-gray-300" />
                        </div>
                        <span className="text-sm text-finance-text/40">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* After */}
            <AnimatedSection delay={0.2}>
              <div className="p-8 rounded-2xl border border-finance-blue/15 bg-gradient-to-br from-white to-finance-blue/[0.02] relative overflow-hidden shadow-sm">
                <div className="absolute top-0 right-0 w-32 h-32 bg-finance-blue/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="relative">
                  <p className="text-finance-blue text-xs font-medium tracking-wider uppercase mb-6">Sonra</p>
                  <div className="space-y-4">
                    {after.map((item, i) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-6 h-6 rounded-md bg-finance-blue/10 flex items-center justify-center">
                          <Check size={12} className="text-finance-blue" />
                        </div>
                        <span className="text-sm font-medium text-finance-text">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===== AUDIENCE SECTION ===== */
export function AudienceSection() {
  const audiences = [
    { icon: Store, title: 'Küçük İşletmeler', desc: 'Finansal düzeni kurmak isteyen girişimciler için.' },
    { icon: Users, title: 'KOBİ\'ler', desc: 'Büyüyen operasyonlarını ölçeklendiren şirketler için.' },
    { icon: ShoppingCart, title: 'E-ticaret İşletmeleri', desc: 'Yüksek sipariş hacmini yöneten online satıcılar için.' },
    { icon: ClipboardList, title: 'Sipariş Yoğun İşletmeler', desc: 'Sürekli sipariş akışı olan işletmeler için.' },
  ];

  return (
    <section className="relative py-32 md:py-44 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-finance-text tracking-tight">
            FinanSes kimler için?
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((aud, i) => (
            <AnimatedSection key={aud.title} delay={0.1 * i}>
              <div className="group p-6 md:p-8 rounded-2xl border border-gray-100 hover:border-finance-blue/20 bg-white hover:shadow-sm transition-all duration-300 h-full">
                <div className="w-10 h-10 rounded-xl bg-finance-blue/5 flex items-center justify-center mb-5 group-hover:bg-finance-blue/10 transition-colors">
                  <aud.icon size={18} className="text-finance-blue" />
                </div>
                <h3 className="text-base font-semibold text-finance-text mb-2">{aud.title}</h3>
                <p className="text-sm text-finance-text-light leading-relaxed">{aud.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===== TRUST SECTION ===== */
export function TrustSection() {
  const trustPoints = [
    { icon: Layout, label: 'Sade deneyim', desc: 'Gereksiz karmaşıklık yok' },
    { icon: Database, label: 'Düzenli bilgi', desc: 'Her veri yerli yerinde' },
    { icon: Shield, label: 'Kontrollü süreç', desc: 'Her adım şeffaf' },
    { icon: BarChart3, label: 'Anlaşılır arayüz', desc: 'Sezgisel kullanım' },
  ];

  return (
    <section className="relative py-32 md:py-44 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-finance-text tracking-tight leading-[1.1] mb-8">
              Finansal teknoloji,
              <br />
              <span className="text-finance-text-light">önce güven ister.</span>
            </h2>
            <p className="text-finance-text-light text-lg leading-relaxed max-w-xl mx-auto">
              Karmaşık değil, anlaşılır. Kalabalık değil, düzenli. 
              FinanSes, finansal süreçlerinizi güvenle yönetmeniz için tasarlandı.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustPoints.map((point, i) => (
              <AnimatedSection key={point.label} delay={0.1 * i}>
                <div className="flex flex-col items-center text-center p-6 rounded-2xl border border-gray-100 bg-finance-warm-white/50 card-hover">
                  <div className="w-12 h-12 rounded-xl bg-white border border-gray-100 flex items-center justify-center shadow-sm mb-4">
                    <point.icon size={18} className="text-finance-blue" />
                  </div>
                  <span className="text-sm font-semibold text-finance-text mb-1">{point.label}</span>
                  <span className="text-xs text-finance-text-light">{point.desc}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===== BALTECH SECTION ===== */
export function BalTechSection() {
  return (
    <section id="hakkimizda" className="relative py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-finance-text tracking-tight mb-6">
            BalTech
          </h2>
          <p className="text-finance-text-light text-base md:text-lg leading-relaxed">
            FinanSes, BalTech ekibi tarafından 2026 TEKNOFEST Finansal Teknolojiler Yarışması kapsamında geliştirilmektedir.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ===== FINAL CTA ===== */
export function FinalCTA() {
  return (
    <section id="kesfet" className="relative py-32 md:py-44 bg-finance-dark noise-overlay overflow-hidden">
      {/* Animated glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-finance-blue/8 rounded-full blur-[150px] animate-glow" />
      <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] bg-finance-cyan/5 rounded-full blur-[100px] animate-glow" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-finance-blue/3 rounded-full blur-[120px]" />
      {/* Grid */}
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <AnimatedSection>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-finance-cyan animate-pulse" />
            <span className="text-white/40 text-xs font-medium">2026 TEKNOFEST</span>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white tracking-tight leading-[1.05] mb-6">
            Finansa
            <br />
            <span className="gradient-text">Ses Ver.</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="text-white/40 text-base md:text-lg lg:text-xl max-w-lg mx-auto mb-12 leading-relaxed">
            Ön muhasebe ve sipariş yönetimini daha akıllı bir deneyime dönüştürün.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <a
            href="#"
            className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-finance-blue text-white text-base font-medium hover:bg-finance-accent transition-all duration-300 hover:shadow-xl hover:shadow-finance-blue/25 hover:scale-[1.02]"
          >
            FinanSes'i Keşfet
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <p className="text-white/20 text-xs mt-6">
            Yapay zekâ destekli • Ön muhasebe • Sipariş yönetimi
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
