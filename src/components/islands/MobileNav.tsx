import { useState } from "react";

const shopMenu = {
  byProduct: [
    { href: '/collections/donnease', label: 'DonnEase\u2122 Adaptive Socks' },
    { href: '/collections/compression-socks', label: 'Compression Socks' },
    { href: '/collections/bundles', label: 'Bundles' },
  ],
  byCompression: [
    { href: '/collections/all?compression=8-15', label: 'Mild (8\u201315 mmHg)' },
    { href: '/collections/all?compression=15-20', label: 'Moderate (15\u201320 mmHg)' },
    { href: '/collections/all?compression=20-30', label: 'Firm (20\u201330 mmHg)' },
  ],
  byNeed: [
    { href: '/collections/limited-mobility', label: 'Limited Mobility & Dexterity' },
    { href: '/collections/post-surgery', label: 'Post-Surgical Recovery' },
    { href: '/collections/travel', label: 'Daily Wear & Travel' },
  ],
};

const navLinks = [
  { href: '/learn', label: 'Learn' },
  { href: '/about', label: 'About' },
  { href: '/pro', label: 'AccessAble Pro' },
  { href: '/contact', label: 'Contact' },
];

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);

  return (
    <>
      <button
        className="lg:hidden inline-flex items-center justify-center h-12 w-12 rounded-md hover:bg-accent transition-colors"
        aria-label="Menu"
        onClick={() => setIsOpen(true)}
      >
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-[99] bg-black/50"
            onClick={() => setIsOpen(false)}
          />

          {/* Drawer */}
          <div className="fixed inset-y-0 left-0 z-[100] w-80 bg-white shadow-lg animate-in slide-in-from-left duration-300">
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="text-lg font-semibold">Menu</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center justify-center h-10 w-10 rounded-md hover:bg-accent"
                aria-label="Close menu"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <nav className="p-4 space-y-1">
              {/* Shop dropdown */}
              <div>
                <button
                  onClick={() => setShopOpen(!shopOpen)}
                  className="flex w-full items-center justify-between py-3 font-semibold text-[#1B2A4A]"
                  aria-expanded={shopOpen}
                >
                  Shop
                  <svg
                    className={`h-4 w-4 transition-transform duration-200 ${shopOpen ? 'rotate-180' : ''}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {shopOpen && (
                  <div className="pb-3 space-y-4">
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-[hsl(var(--gold-text))] px-3 mb-1">By Product</h4>
                      <ul>
                        {shopMenu.byProduct.map(item => (
                          <li key={item.href}>
                            <a href={item.href} className="block px-3 py-2 text-sm hover:bg-accent rounded-md" onClick={() => setIsOpen(false)}>
                              {item.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-[hsl(var(--gold-text))] px-3 mb-1">By Compression Level</h4>
                      <ul>
                        {shopMenu.byCompression.map(item => (
                          <li key={item.href}>
                            <a href={item.href} className="block px-3 py-2 text-sm hover:bg-accent rounded-md" onClick={() => setIsOpen(false)}>
                              {item.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-[hsl(var(--gold-text))] px-3 mb-1">By Need</h4>
                      <ul>
                        {shopMenu.byNeed.map(item => (
                          <li key={item.href}>
                            <a href={item.href} className="block px-3 py-2 text-sm hover:bg-accent rounded-md" onClick={() => setIsOpen(false)}>
                              {item.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>

              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block py-3 font-medium text-[#1B2A4A]"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </>
      )}
    </>
  );
}
