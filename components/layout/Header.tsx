'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HiMenu, HiX, HiChevronDown, HiHome, HiUser, HiBriefcase, HiDocumentText, HiCollection, HiPhone } from 'react-icons/hi';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

const navItems = [
  { name: 'Home', path: '/', icon: HiHome },
  { name: 'About', path: '/about', icon: HiUser },
  { name: 'Work', path: '/work', icon: HiBriefcase },
  { name: 'Blog', path: '/blog', icon: HiDocumentText },
];

const moreMenuItems = [
  { name: 'Projects', path: '/projects', icon: HiCollection },
];

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[96%] max-w-6xl"
      >
        <div className="glass-nav rounded-full px-3 md:px-6 py-3">
          <div className="relative z-10 flex items-center justify-between gap-2">
            {/* Logo - Left */}
            <div className="shrink-0 min-w-[60px]">
              <Link href="/" className="text-lg md:text-xl font-bold hover:text-accent transition-colors group">
                <span className="text-foreground group-hover:glow-text-sm transition-all duration-300">Moeez R.</span>
              </Link>
            </div>

            {/* Desktop Navigation - Center */}
            <nav className="hidden md:flex items-center justify-center flex-1">
              <div className="flex items-center gap-1 lg:gap-2">
                {navItems.map((item) => {
                  const isActive = pathname === item.path;
                  return (
                    <Link
                      key={item.path}
                      href={item.path}
                      className="relative text-sm text-secondary hover:text-foreground transition-colors font-medium px-4 py-2 rounded-full hover:bg-black/5 group"
                    >
                      <span className="relative z-10">{item.name}</span>
                      {isActive && (
                        <div
                          className="absolute inset-0 bg-accent/10 border border-accent/30 rounded-full"
                        />
                      )}
                    </Link>
                  );
                })}
              </div>
            </nav>

            {/* Right side - More menu and Book a Call */}
            <div className="hidden md:flex items-center gap-2 shrink-0">
              <DropdownMenu.Root>
                <DropdownMenu.Trigger asChild>
                  <button
                    className="text-sm text-secondary hover:text-foreground transition-colors font-medium px-3 py-1.5 rounded-full hover:bg-black/5 flex items-center gap-1 outline-none"
                  >
                    More
                    <HiChevronDown className="text-xs" />
                  </button>
                </DropdownMenu.Trigger>

                <DropdownMenu.Portal>
                  <DropdownMenu.Content
                    className="min-w-40 glass-card rounded-2xl p-1.5 z-50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95"
                    sideOffset={5}
                  >
                    {moreMenuItems.map((item) => {
                      const Icon = item.icon;
                      return (
                        <DropdownMenu.Item key={item.path} asChild>
                          <Link
                            href={item.path}
                            className="text-sm text-secondary hover:text-foreground transition-colors px-3 py-2.5 rounded-xl hover:bg-black/5 cursor-pointer flex items-center gap-2 outline-none focus:bg-black/5 data-highlighted:bg-black/5"
                          >
                            <Icon className="text-base" />
                            {item.name}
                          </Link>
                        </DropdownMenu.Item>
                      );
                    })}
                  </DropdownMenu.Content>
                </DropdownMenu.Portal>
              </DropdownMenu.Root>

              <div>
                <a
                  href="https://cal.com/moeezrhmn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2 bg-accent text-white text-sm font-semibold rounded-full shadow-[0_2px_10px_rgba(234,88,12,0.3)] hover:bg-orange-600 hover:shadow-[0_4px_16px_rgba(234,88,12,0.45)] active:scale-95 transition-all duration-200"
                >
                  <HiPhone className="text-sm" />
                  Book a Call
                </a>
              </div>
            </div>

            {/* Mobile Menu Button - Right aligned on mobile */}
            <div className="md:hidden shrink-0">
              <button
                className="text-2xl text-foreground hover:text-accent transition-colors p-2 relative"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? <HiX /> : <HiMenu />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-30 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Mobile Menu */}
          <div
            className="fixed top-24 left-1/2 -translate-x-1/2 w-[90%] max-w-md z-40 md:hidden"
          >
            <div className="glass-card rounded-3xl p-6 overflow-hidden">
              {/* Background */}
              <div className="absolute inset-0 opacity-30">
                <div
                  className="absolute inset-0 bg-linear-to-br from-accent/20 via-transparent to-accent/10"
                />
              </div>

              <nav className="relative z-10 flex flex-col gap-2">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = pathname === item.path;
                  return (
                    <div key={item.path}>
                      <Link
                        href={item.path}
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group ${
                          isActive
                            ? 'bg-accent/20 text-accent border border-accent/30'
                            : 'text-secondary hover:text-foreground hover:bg-black/5 border border-transparent'
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <Icon className={`text-xl transition-transform group-hover:scale-110 ${isActive ? 'text-accent' : ''}`} />
                        <span className="font-medium">{item.name}</span>
                        {isActive && (
                          <div
                            className="ml-auto w-2 h-2 rounded-full bg-accent"
                          />
                        )}
                      </Link>
                    </div>
                  );
                })}

                {/* More menu items */}
                {moreMenuItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = pathname === item.path;
                  return (
                    <div key={item.path}>
                      <Link
                        href={item.path}
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group ${
                          isActive
                            ? 'bg-accent/20 text-accent border border-accent/30'
                            : 'text-secondary hover:text-foreground hover:bg-black/5 border border-transparent'
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <Icon className={`text-xl transition-transform group-hover:scale-110 ${isActive ? 'text-accent' : ''}`} />
                        <span className="font-medium">{item.name}</span>
                        {isActive && (
                          <div
                            className="ml-auto w-2 h-2 rounded-full bg-accent"
                          />
                        )}
                      </Link>
                    </div>
                  );
                })}

                {/* Divider */}
                <div
                  className="h-px bg-linear-to-r from-transparent via-accent/30 to-transparent my-2"
                />

                {/* Book a Call Button */}
                <div>
                  <a
                    href="https://cal.com/moeezrhmn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-accent text-white px-6 py-3.5 rounded-xl font-semibold text-sm shadow-[0_2px_12px_rgba(234,88,12,0.35)] hover:bg-orange-600 hover:shadow-[0_4px_20px_rgba(234,88,12,0.5)] active:scale-95 transition-all duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <HiPhone className="text-base" />
                    Book a Call
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </>
      )}
    </>
  );
};
