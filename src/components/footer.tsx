export default function Footer() {
  return (
    <footer className="bg-charcoal px-6 md:px-12 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 flex-wrap">
      <div className="font-[family-name:var(--font-cormorant)] font-light text-[22px] tracking-[0.12em] text-cream">
        maeven
      </div>
      <div className="flex gap-6">
        <a href="#" className="text-xs font-light text-white/40 no-underline tracking-[0.05em] transition-colors duration-200 hover:text-white/80">
          Instagram
        </a>
        <a href="#" className="text-xs font-light text-white/40 no-underline tracking-[0.05em] transition-colors duration-200 hover:text-white/80">
          TikTok
        </a>
        <a href="mailto:hello@maeven.app" className="text-xs font-light text-white/40 no-underline tracking-[0.05em] transition-colors duration-200 hover:text-white/80">
          hello@maeven.app
        </a>
      </div>
      <div className="text-[11px] text-white/25 font-light">
        &copy; {new Date().getFullYear()} Maeven. All rights reserved.
      </div>
    </footer>
  );
}
