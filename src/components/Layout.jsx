import { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const navigation = [
  {
    name: 'Services',
    children: [
      { name: 'Occupational Therapy', href: '/services/occupational-therapy' },
      { name: 'Gaming-Informed Therapy', href: '/services/gaming-informed-therapy' },
      { name: 'Minecraft Program', href: '/services/minecraft-program' },
      { name: 'Assessments & Reports', href: '/services/assessments-reports' },
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
    ],
  },
  { name: 'For Referrers', href: '/for-referrers' },
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
                className={`block px-4 py-2 text-
