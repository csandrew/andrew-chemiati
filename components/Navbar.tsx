'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const links = [['Home', 'home'], ['About', 'about'], ['Services', 'services'], ['Portfolio', 'portfolio'], ['Contact', 'contact']];
export default function Navbar() {
    const [open, setOpen] = useState(false);
    return <header className="fixed inset-x-0 top-0 z-50 border-b border-navy-dark/5 bg-white/90 backdrop-blur-xl">
        <div className="container-x flex h-20 items-center justify-between">
            <a href="#home" className="font-extrabold tracking-tight text-xl">Andrew Chemiati<span className="text-brown">.</span></a>
            <nav className="hidden md:flex items-center gap-8">{links.map(([label, id]) => <a key={id} href={'#' + id} className="text-sm font-semibold text-navy-dark/70 transition hover:text-brown">{label}</a>)}</nav>
            <a href="#contact" className="hidden sm:inline-flex rounded-md bg-ink px-5 py-3 text-sm font-bold text-white transition hover:bg-gold hover:text-ink">Make enquiry</a>
            <button aria-label="Open menu" onClick={() => setOpen(!open)} className="md:hidden text-2xl">{open ? '×' : '☰'}</button>
        </div>

        <AnimatePresence>
            {open && (
                <motion.nav
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="md:hidden border-t border-navy-dark/5 bg-white"
                >
                    <div className="container-x flex flex-col py-4">
                        {links.map(([label, id]) => (
                            <a
                                key={id}
                                href={`#${id}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    setOpen(false);

                                    setTimeout(() => {
                                        document.getElementById(id)?.scrollIntoView({
                                            behavior: 'smooth',
                                            block: 'start',
                                        });
                                        history.replaceState(null, '', `#${id}`);
                                    }, 250);
                                }}
                                className="block py-3 font-semibold text-navy-dark"
                            >
                                {label}
                            </a>
                        ))}
                    </div>
                </motion.nav>
            )}
        </AnimatePresence>
    </header>
}
