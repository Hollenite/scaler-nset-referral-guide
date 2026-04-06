import React, { memo } from 'react';

const NAV_ITEMS = ['About SST', 'Experience', 'NSET Guide', 'FAQ'];

const Navbar = memo(({ onCopy, activeSection }) => (
  <header className="sticky top-0 z-50 bg-primary-dark/80 backdrop-blur-md border-b border-white/10">
    <div className="max-w-[1100px] mx-auto w-[calc(100%-40px)] flex flex-col sm:flex-row items-center justify-between py-4 sm:h-16 gap-4 sm:gap-0">
      <a
        href="#top"
        className="font-heading font-bold text-[1.1rem] text-white flex items-center gap-2.5 tracking-tight hover:scale-[1.02] transition-transform"
      >
        <span className="w-2 h-2 bg-success rounded-full shadow-[0_0_12px_rgba(34,197,94,0.6)]" />
        Scaler NSET Guide
      </a>
      <nav className="flex flex-wrap justify-center sm:justify-end gap-2 sm:gap-6 items-center w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
        {NAV_ITEMS.map((item) => {
          const id = item.split(' ')[0].toLowerCase();
          const isActive = activeSection === id;
          return (
            <a
              key={item}
              href={`#${id}`}
              className={`text-[0.95rem] font-medium transition-colors relative group whitespace-nowrap px-2 sm:px-0 ${
                isActive ? 'text-primary-light' : 'text-white/70 hover:text-primary-light'
              }`}
            >
              {item}
              <span
                className={`absolute -bottom-1 left-0 w-full h-[1px] bg-primary-light transition-transform origin-left ${
                  isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}
              />
            </a>
          );
        })}
        <button
          onClick={onCopy}
          className="bg-white/10 hover:bg-white/20 text-white px-4 h-10 rounded-md font-semibold text-sm transition-colors border border-white/10 shrink-0 ml-2 hover:scale-[1.02] active:scale-[0.98]"
        >
          Get Code
        </button>
      </nav>
    </div>
  </header>
));

Navbar.displayName = 'Navbar';
export default Navbar;
