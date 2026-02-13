import { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Moon } from 'lucide-react';

const navigation = [
  {
    name: 'Services',
    children: [
      { name: 'Occupational Therapy', href: '/services/occupational-therapy' },
      { name: 'Gaming-Informed Therapy', href: '/services/gaming-informed-therapy' },
      { name: 'Minecraft Program', href: '/services/minecraft-program' },
      { name: 'Assessments & Reports', href: '/services/assessments-reports' },
      { name: 'Sleep Program', href: '/services/sleep-program' },
    ],
  },
  {
    name: 'About',
    children: [
      { name: 'Our Approach', href: '/about/approach' },
      { name: 'Team', href: '/about/team' },
    ],
  },
  {
    name: 'Learn',
    children: [
      { name: 'Understanding PDA', href: '/learn/understanding-pda' },
      { name: 'Late Autism Diagnosis', href: '/learn/late-autism-diagnosis' },
      { name: 'Executive Function & Complex Health', href: '/learn/executive-function-complex-health' },
      { name: 'Chronotype Quiz', href: '/learn/chronotype-quiz' },
      { name: 'Energy & Executive Function Quiz', href: '/learn/energy-quiz' },
      { name: 'PDA Profile Quiz', href: '/learn/pda-quiz' },
    ],
  },
  { name: 'For Referrers', href: '/for-referrers' },
  {
    name: 'For Clinicians',
    children: [
      { name: 'Performance Lab', href: '/for-clinicians/performance-lab' },
    ],
  },
];

function NavDropdown({ item, mobile = false }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  
  const isActive = item.children?.some(child => location.pathname === child.href);

  if (mobile) {
    return (
      <div className="space-y-2">
        <button
          onClick={() => setOpen(!open)}
          className={`flex items-center justify-between w-full px-4 py-2 text-lg font-display uppercase tracking-wide transition-colors ${
            isActive ? 'text-primary' : 'text-foreground/80 hover:text-foreground'
          }`}
        >
          {item.name}
          <ChevronDown className={`w-5 h-5 transition-transform ${open ? 'rotate-180' : ''}`} />
        </button>
        {open && (
          <div className="pl-4 space-y-1">
            {item.children.map((child) => (
              <Link
                key={child.href}
                to={child.href}
                className={`block px-4 py-2 text-base transition-colors ${
                  location.pathname === child.href
                    ? 'text-primary'
                    : 'text-foreground/60 hover:text-foreground'
                }`}
              >
                {child.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="relative group">
      <button
        className={`flex items-center gap-1 px-3 py-2 text-sm font-display uppercase tracking-wide transition-colors ${
          isActive ? 'text-primary' : 'text-foreground/80 hover:text-foreground'
        }`}
      >
        {item.name}
        <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
      </button>
      <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
        <div className="bg-card border border-border rounded-lg shadow-lg py-2 min-w-[220px]">
          {item.children.map((child) => (
            <Link
              key={child.href}
              to={child.href}
              className={`block px-4 py-2 text-sm transition-colors ${
                location.pathname === child.href
                  ? 'text-primary bg-secondary/50'
                  : 'text-foreground/80 hover:text-foreground hover:bg-secondary/30'
              }`}
            >
              {child.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-xl font-display font-bold text-primary-foreground">E</span>
            </div>
            <span className="font-display text-xl uppercase tracking-wide">Estus Health</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) =>
              item.children ? (
                <NavDropdown key={item.name} item={item} />
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 text-sm font-display uppercase tracking-wide transition-colors ${
                    location.pathname === item.href
                      ? 'text-primary'
                      : 'text-foreground/80 hover:text-foreground'
                  }`}
                >
                  {item.name}
                </Link>
              )
            )}
            
            {/* Client Portal Button (Desktop) */}
            <a
              href="https://questot.bookings.pracsuite.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-4 py-2 border border-border text-foreground text-sm font-display uppercase tracking-wide rounded-lg hover:border-primary hover:bg-secondary/50 transition-colors"
            >
              Client Portal
            </a>

            {/* Get Started Button (Desktop) */}
            <Link
              to="/contact"
              className="ml-2 px-5 py-2 bg-primary text-primary-foreground text-sm font-display uppercase tracking-wide rounded-lg hover:bg-primary/90 transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <div className="space-y-2">
              {navigation.map((item) =>
                item.children ? (
                  <NavDropdown key={item.name} item={item} mobile />
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-2 text-lg font-display uppercase tracking-wide transition-colors ${
                      location.pathname === item.href
                        ? 'text-primary'
                        : 'text-foreground/80 hover:text-foreground'
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              )}
              
              <div className="pt-4 px-4 space-y-3">
                {/* Client Portal Button (Mobile) */}
                <a
                  href="https://questot.bookings.pracsuite.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-5 py-3 border border-border text-foreground font-display uppercase tracking-wide rounded-lg hover:bg-secondary/50 transition-colors"
                >
                  Client Portal
                </a>

                {/* Get Started Button (Mobile) */}
                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full text-center px-5 py-3 bg-primary text-primary-foreground font-display uppercase tracking-wide rounded-lg"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-xl font-display font-bold text-primary-foreground">E</span>
              </div>
              <span className="font-display text-xl uppercase tracking-wide">Estus Health</span>
            </Link>
            <p className="text-foreground/60 text-sm leading-relaxed">
              Neuroaffirming occupational therapy across Perth and via telehealth Australia-wide.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-sm uppercase tracking-wide mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link to="/services/occupational-therapy" className="text-foreground/60 hover:text-primary text-sm transition-colors">Occupational Therapy</Link></li>
              <li><Link to="/services/gaming-informed-therapy" className="text-foreground/60 hover:text-primary text-sm transition-colors">Gaming-Informed Therapy</Link></li>
              <li><Link to="/services/minecraft-program" className="text-foreground/60 hover:text-primary text-sm transition-colors">Minecraft Program</Link></li>
              <li><Link to="/services/assessments-reports" className="text-foreground/60 hover:text-primary text-sm transition-colors">Assessments & Reports</Link></li>
            </ul>
          </div>

          {/* Learn */}
          <div>
            <h4 className="font-display text-sm uppercase tracking-wide mb-4">Learn</h4>
            <ul className="space-y-2">
              <li><Link to="/learn/understanding-pda" className="text-foreground/60 hover:text-primary text-sm transition-colors">Understanding PDA</Link></li>
              <li><Link to="/learn/late-autism-diagnosis" className="text-foreground/60 hover:text-primary text-sm transition-colors">Late Autism Diagnosis</Link></li>
              <li><Link to="/learn/executive-function-complex-health" className="text-foreground/60 hover:text-primary text-sm transition-colors">Executive Function & Complex Health</Link></li>
              <li><Link to="/learn/chronotype-quiz" className="text-foreground/60 hover:text-primary text-sm transition-colors">Chronotype Quiz</Link></li>
              <li><Link to="/learn/energy-quiz" className="text-foreground/60 hover:text-primary text-sm transition-colors">Energy & Executive Function Quiz</Link></li>
              <li><Link to="/learn/pda-quiz" className="text-foreground/60 hover:text-primary text-sm transition-colors">PDA Profile Quiz</Link></li>
            </ul>
            <h4 className="font-display text-sm uppercase tracking-wide mb-4 mt-8">For Clinicians</h4>
            <ul className="space-y-2">
              <li><Link to="/for-clinicians/performance-lab" className="text-foreground/60 hover:text-primary text-sm transition-colors">Performance Lab</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm uppercase tracking-wide mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li>Perth, Western Australia</li>
              <li>Telehealth Australia-wide</li>
              <li className="pt-2">
                <Link to="/contact" className="text-primary hover:text-primary/80 transition-colors">
                  Make a referral →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-foreground/40">
            © {new Date().getFullYear()} Estus Health. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function BottomNav() {
  const location = useLocation();
  const isActive = location.pathname === '/services/sleep-program';

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-t border-border shadow-[0_-2px_10px_rgba(0,0,0,0.08)]">
      <div className="container">
        <div className="flex items-center justify-center h-14">
          <Link
            to="/services/sleep-program"
            className={`flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-display uppercase tracking-wide transition-colors ${
              isActive
                ? 'text-primary bg-secondary/50'
                : 'text-foreground/70 hover:text-primary hover:bg-secondary/30'
            }`}
          >
            <Moon className="w-4 h-4" />
            Sleep Program
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16 lg:pt-20 pb-14">
        <Outlet />
      </main>
      <Footer />
      <BottomNav />
    </div>
  );
}
