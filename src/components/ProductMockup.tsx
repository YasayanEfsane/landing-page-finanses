import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, ArrowUpRight, Package, FileText, Zap, Bell, Search, ChevronRight } from 'lucide-react';

export default function ProductMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full max-w-5xl mx-auto"
    >
      {/* Glow effect behind */}
      <div className="absolute -inset-12 bg-gradient-to-r from-finance-blue/8 via-finance-cyan/4 to-finance-blue/8 rounded-3xl blur-3xl" />
      
      {/* Main interface container */}
      <div className="relative rounded-2xl border border-white/[0.08] bg-finance-navy/95 shadow-2xl shadow-black/30 overflow-hidden">
        {/* Top bar */}
        <div className="flex items-center gap-3 px-5 py-3 border-b border-white/5 bg-white/[0.01]">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
          </div>
          <div className="flex-1 flex justify-center">
            <div className="px-4 py-1.5 rounded-lg bg-white/[0.04] border border-white/5 text-white/30 text-xs flex items-center gap-2">
              <Search size={10} />
              <span>finanses.app/dashboard</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center">
              <Bell size={10} className="text-white/30" />
            </div>
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-finance-blue to-finance-cyan" />
          </div>
        </div>

        {/* Interface content */}
        <div className="flex min-h-[400px] md:min-h-[460px]">
          {/* Sidebar */}
          <div className="hidden md:flex flex-col w-56 border-r border-white/5 p-4 bg-white/[0.01]">
            <div className="flex items-center gap-2.5 mb-8 px-1">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-finance-blue to-finance-cyan flex items-center justify-center">
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                  <path d="M3 12L6 4L9 9L13 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-white/90 text-sm font-medium">FinanSes</span>
              <span className="ml-auto text-[9px] px-1.5 py-0.5 rounded bg-finance-blue/15 text-finance-light-blue font-medium">PRO</span>
            </div>
            <nav className="flex flex-col gap-0.5">
              {[
                { icon: '◉', label: 'Finansal Özet', active: true },
                { icon: '◎', label: 'Siparişler', active: false, badge: '12' },
                { icon: '◈', label: 'Faturalar', active: false },
                { icon: '◆', label: 'Yapay Zekâ', active: false },
                { icon: '◇', label: 'Raporlar', active: false },
                { icon: '○', label: 'Müşteriler', active: false },
              ].map((item) => (
                <div
                  key={item.label}
                  className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs transition-colors ${
                    item.active
                      ? 'bg-finance-blue/15 text-finance-light-blue'
                      : 'text-white/35 hover:text-white/50 hover:bg-white/[0.02]'
                  }`}
                >
                  <span className="text-[10px] opacity-70">{item.icon}</span>
                  <span className="flex-1">{item.label}</span>
                  {item.badge && (
                    <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-finance-cyan/15 text-finance-cyan font-medium">
                      {item.badge}
                    </span>
                  )}
                </div>
              ))}
            </nav>
            
            {/* AI Assistant mini */}
            <div className="mt-auto pt-4 border-t border-white/5">
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-r from-finance-blue/10 to-finance-cyan/5 border border-white/5">
                <Zap size={11} className="text-finance-cyan" />
                <span className="text-white/50 text-[10px]">AI Asistan Aktif</span>
                <div className="ml-auto w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="flex-1 p-4 md:p-6 overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between mb-5">
              <div>
                <h3 className="text-white/90 text-sm font-medium">Finansal Özet</h3>
                <p className="text-white/30 text-xs mt-0.5">Ocak 2026 • Gerçek zamanlı</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/5 text-white/40 text-[10px]">
                  Bu Ay
                </div>
                <div className="px-2.5 py-1 rounded-md bg-green-500/10 text-green-400 text-[10px] font-medium border border-green-500/10">
                  ● Aktif
                </div>
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-3 mb-5">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="p-3 rounded-xl bg-white/[0.03] border border-white/5"
              >
                <p className="text-white/35 text-[10px] mb-1">Toplam Gelir</p>
                <p className="text-white/90 text-sm font-semibold tracking-tight">₺284.500</p>
                <div className="flex items-center gap-1 mt-1.5">
                  <TrendingUp size={10} className="text-green-400" />
                  <span className="text-green-400 text-[10px] font-medium">+12.4%</span>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="p-3 rounded-xl bg-white/[0.03] border border-white/5"
              >
                <p className="text-white/35 text-[10px] mb-1">Toplam Gider</p>
                <p className="text-white/90 text-sm font-semibold tracking-tight">₺142.300</p>
                <div className="flex items-center gap-1 mt-1.5">
                  <TrendingDown size={10} className="text-red-400" />
                  <span className="text-red-400 text-[10px] font-medium">-3.2%</span>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 }}
                className="p-3 rounded-xl bg-white/[0.03] border border-white/5"
              >
                <p className="text-white/35 text-[10px] mb-1">Aktif Sipariş</p>
                <p className="text-white/90 text-sm font-semibold tracking-tight">1.247</p>
                <div className="flex items-center gap-1 mt-1.5">
                  <ArrowUpRight size={10} className="text-finance-light-blue" />
                  <span className="text-finance-light-blue text-[10px] font-medium">+8.1%</span>
                </div>
              </motion.div>
            </div>

            {/* Chart area */}
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 mb-4">
              <div className="flex items-center justify-between mb-4">
                <span className="text-white/50 text-[10px] font-medium">Haftalık Nakit Akışı</span>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-finance-blue/60" />
                    <span className="text-white/30 text-[9px]">Gelir</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-finance-cyan/40" />
                    <span className="text-white/30 text-[9px]">Gider</span>
                  </div>
                </div>
              </div>
              <div className="flex items-end gap-2 h-20">
                {[
                  { income: 45, expense: 30 },
                  { income: 65, expense: 40 },
                  { income: 50, expense: 35 },
                  { income: 80, expense: 45 },
                  { income: 60, expense: 38 },
                  { income: 90, expense: 50 },
                  { income: 75, expense: 42 },
                ].map((d, i) => (
                  <div key={i} className="flex-1 flex flex-col gap-0.5">
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: `${d.income}%` }}
                      transition={{ duration: 0.8, delay: 1.0 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                      className="rounded-sm bg-gradient-to-t from-finance-blue/50 to-finance-blue/30"
                    />
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: `${d.expense}%` }}
                      transition={{ duration: 0.8, delay: 1.2 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                      className="rounded-sm bg-gradient-to-t from-finance-cyan/30 to-finance-cyan/15"
                    />
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-2">
                {['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Paz'].map((day) => (
                  <span key={day} className="text-white/20 text-[8px] flex-1 text-center">{day}</span>
                ))}
              </div>
            </div>

            {/* Recent items */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <p className="text-white/40 text-[10px] font-medium">Son İşlemler</p>
                <span className="text-white/20 text-[9px] flex items-center gap-0.5">Tümü <ChevronRight size={8} /></span>
              </div>
              <div className="space-y-1.5">
                {[
                  { icon: Package, label: 'Sipariş #1247', sub: 'Müşteri A', value: '+₺4.200', color: 'text-green-400', bg: 'bg-green-500/10' },
                  { icon: FileText, label: 'Fatura #892', sub: 'Tedarikçi X', value: '-₺1.850', color: 'text-red-400', bg: 'bg-red-500/10' },
                  { icon: Zap, label: 'AI Önerisi', sub: 'Maliyet optimizasyonu', value: 'Kaydet', color: 'text-finance-light-blue', bg: 'bg-finance-blue/10' },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.4 + i * 0.12 }}
                    className="flex items-center justify-between px-3 py-2.5 rounded-lg bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className={`w-6 h-6 rounded-md ${item.bg} flex items-center justify-center`}>
                        <item.icon size={11} className={item.color} />
                      </div>
                      <div>
                        <span className="text-white/60 text-[11px] block">{item.label}</span>
                        <span className="text-white/25 text-[9px]">{item.sub}</span>
                      </div>
                    </div>
                    <span className={`${item.color} text-[11px] font-medium`}>{item.value}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
