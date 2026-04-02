import WaitlistForm from "./waitlist-form";

export default function Footer() {
  return (
    <footer id="waitlist" className="bg-surface pt-24 pb-12">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 w-full">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-24">
          <div className="space-y-6 max-w-sm">
            <div className="text-3xl font-bold text-on-surface font-[family-name:var(--font-manrope)]">
              Maeven
            </div>
            <p className="text-on-surface-variant text-lg">
              Reclaiming the mental space of mothers everywhere through
              empathetic automation.
            </p>
          </div>
          <div className="w-full md:w-auto">
            <p className="text-sm uppercase tracking-widest text-on-surface font-bold mb-6">
              Join the Waitlist
            </p>
            <WaitlistForm variant="footer" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-outline-variant/30 gap-8">
          <p className="text-on-surface-variant/40 text-xs uppercase tracking-widest">
            &copy; {new Date().getFullYear()} Maeven. The Digital Concierge.
          </p>
          <div className="flex gap-8">
            <a
              href="#"
              className="text-on-surface-variant/40 hover:text-primary transition-colors text-xs uppercase tracking-widest"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-on-surface-variant/40 hover:text-primary transition-colors text-xs uppercase tracking-widest"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-on-surface-variant/40 hover:text-primary transition-colors text-xs uppercase tracking-widest"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
