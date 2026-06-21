const Footer = () => {
  return (
    <footer className="mt-16 border-t border-slate-200 px-5 pb-8 pt-4 sm:px-6 lg:px-10">
      <div className="flex flex-col gap-6 text-color1 sm:flex-row sm:items-end sm:justify-between">
        <nav aria-label="Footer social" className="space-y-2 text-sm">
          <a
            href="#"
            className="flex items-center gap-2 text-[#4585CA] transition-colors hover:text-color2"
          >
            <span className="text-[13px] font-semibold leading-none">Be</span>
            <span>Behance</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-2 text-[#4585CA] transition-colors hover:text-color2"
          >
            <span className="text-[13px] font-semibold leading-none">in</span>
            <span>LinkedIn</span>
          </a>
        </nav>

        <div className="text-left">
          <a
            href="mailto:kumarinidhiofficial@gmail.com"
            className="block text-lg font-semibold tracking-[-0.03em] text-[#5A6782] transition-colors hover:text-color2 sm:text-xl"
          >
            kumarinidhiofficial@gmail.com
          </a>
          <p className="mt-1 text-xs text-slate-500">© 2026 Kumari Nidhi.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
