export default function Footer() {
  const navLinks = [
    { label: 'Ürün', href: '#urun' },
    { label: 'Çözüm', href: '#cozum' },
    { label: 'Nasıl Çalışır?', href: '#nasil-calisir' },
    { label: 'Hakkımızda', href: '#hakkimizda' },
  ];

  return (
    <footer className="bg-finance-dark border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-finance-blue to-finance-cyan flex items-center justify-center">
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                  <path d="M3 12L6 4L9 9L13 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-white/90 text-base font-semibold">FinanSes</span>
            </div>
            <p className="text-white/30 text-sm mb-1">Finansa Ses Ver</p>
            <p className="text-white/20 text-xs">2026 BalTech</p>
            <p className="text-white/15 text-xs mt-0.5">2026 TEKNOFEST Finansal Teknolojiler Yarışması</p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/40 text-sm hover:text-white/70 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/5">
          <p className="text-white/15 text-xs text-center md:text-left">
            © 2026 BalTech. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}
