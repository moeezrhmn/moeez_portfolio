'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
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
      <motion.header
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[96%] max-w-6xl"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
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
                      className="relative text-sm text-secondary hover:text-foreground transition-colors font-medium px-4 py-2 rounded-full hover:bg-white/5 group"
                    >
                      <span className="relative z-10">{item.name}</span>
                      {isActive && (
                        <motion.div
                          layoutId="navbar-indicator"
                          className="absolute inset-0 bg-accent/10 border border-accent/30 rounded-full"
                          initial={false}
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                      <motion.div
                        className="absolute bottom-0 left-1/2 h-0.5 bg-accent rounded-full"
                        initial={{ width: 0, x: "-50%" }}
                        whileHover={{ width: "60%", x: "-50%" }}
                        transition={{ duration: 0.2 }}
                      />
                    </Link>
                  );
                })}
              </div>
            </nav>

            {/* Right side - More menu and Book a Call */}
            <div className="hidden md:flex items-center gap-2 shrink-0">
              <DropdownMenu.Root>
                <DropdownMenu.Trigger asChild>
                  <motion.button 
                    className="text-sm text-secondary hover:text-foreground transition-colors font-medium px-3 py-1.5 rounded-full hover:bg-white/5 flex items-center gap-1 outline-none"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    More
                    <motion.div
                      animate={{ rotate: 0 }}
                      whileHover={{ rotate: 180 }}
                      transition={{ duration: 0.3 }}
                    >
                      <HiChevronDown className="text-xs" />
                    </motion.div>
                  </motion.button>
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
                            className="text-sm text-secondary hover:text-foreground transition-colors px-3 py-2.5 rounded-xl hover:bg-white/5 cursor-pointer flex items-center gap-2 outline-none focus:bg-white/10 data-highlighted:bg-white/10"
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

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="text-sm bg-accent/10 hover:bg-accent/20 text-foreground px-5 py-2 rounded-full transition-all duration-300 border border-accent/30 hover:border-accent/50 hover:glow-element inline-flex items-center gap-2"
                >
                  <HiPhone className="text-base" />
                  Book a Call
                </Link>
              </motion.div>
            </div>

            {/* Mobile Menu Button - Right aligned on mobile */}
            <div className="md:hidden shrink-0">
              <motion.button
                className="text-2xl text-foreground hover:text-accent transition-colors p-2 relative"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle mobile menu"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <AnimatePresence mode="wait" initial={false}>
                  {isMobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <HiX />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <HiMenu />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-30 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Mobile Menu */}
            <motion.div
              className="fixed top-24 left-1/2 -translate-x-1/2 w-[90%] max-w-md z-40 md:hidden"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2, type: "spring", stiffness: 300, damping: 25 }}
            >
              <div className="glass-card rounded-3xl p-6 overflow-hidden">
                {/* Animated gradient background */}
                <div className="absolute inset-0 opacity-30">
                  <motion.div
                    className="absolute inset-0 bg-linear-to-br from-accent/20 via-transparent to-accent/10"
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                </div>

                <nav className="relative z-10 flex flex-col gap-2">
                  {navItems.map((item, index) => {
                    const Icon = item.icon;
                    const isActive = pathname === item.path;
                    return (
                      <motion.div
                        key={item.path}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          href={item.path}
                          className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group ${
                            isActive 
                              ? 'bg-accent/20 text-accent border border-accent/30' 
                              : 'text-secondary hover:text-foreground hover:bg-white/5 border border-transparent'
                          }`}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <Icon className={`text-xl transition-transform group-hover:scale-110 ${isActive ? 'text-accent' : ''}`} />
                          <span className="font-medium">{item.name}</span>
                          {isActive && (
                            <motion.div
                              className="ml-auto w-2 h-2 rounded-full bg-accent"
                              layoutId="mobile-indicator"
                              transition={{ type: "spring", stiffness: 380, damping: 30 }}
                            />
                          )}
                        </Link>
                      </motion.div>
                    );
                  })}
                  
                  {/* More menu items */}
                  {moreMenuItems.map((item, index) => {
                    const Icon = item.icon;
                    const isActive = pathname === item.path;
                    return (
                      <motion.div
                        key={item.path}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: (navItems.length + index) * 0.1 }}
                      >
                        <Link
                          href={item.path}
                          className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group ${
                            isActive 
                              ? 'bg-accent/20 text-accent border border-accent/30' 
                              : 'text-secondary hover:text-foreground hover:bg-white/5 border border-transparent'
                          }`}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <Icon className={`text-xl transition-transform group-hover:scale-110 ${isActive ? 'text-accent' : ''}`} />
                          <span className="font-medium">{item.name}</span>
                          {isActive && (
                            <motion.div
                              className="ml-auto w-2 h-2 rounded-full bg-accent"
                              layoutId="mobile-indicator"
                              transition={{ type: "spring", stiffness: 380, damping: 30 }}
                            />
                          )}
                        </Link>
                      </motion.div>
                    );
                  })}

                  {/* Divider */}
                  <motion.div 
                    className="h-px bg-linear-to-r from-transparent via-accent/30 to-transparent my-2"
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    transition={{ delay: 0.5 }}
                  />

                  {/* Book a Call Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <Link
                      href="/contact"
                      className="flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-background px-6 py-3.5 rounded-xl transition-all duration-300 font-semibold hover:glow-element-strong group"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <HiPhone className="text-xl transition-transform group-hover:rotate-12" />
                      Book a Call
                    </Link>
                  </motion.div>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
