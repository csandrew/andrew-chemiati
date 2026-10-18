'use client';

import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section
            id="home"
            // Removed bg-ink here so the background image is visible
            className="relative min-h-screen overflow-hidden pt-20 text-white"
        >
            {/* Background image */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: 'url("/projects/bg-hero.jpg")', 
                }}
            />

            {/* Dark overlay */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-ink/90"
            />

            {/* Gold glow */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-20"
                style={{
                    backgroundImage:
                        'radial-gradient(circle at 75% 25%, var(--gold) 0, transparent 28%), radial-gradient(circle at 15% 80%, var(--gold) 0, transparent 22%)',
                }}
            />

            <div className="container-x relative flex min-h-[calc(100vh-80px)] items-center py-20">
                <div className="mx-auto max-w-4xl text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl font-extrabold leading-[1.05] tracking-[-.06em] sm:text-7xl lg:text-8xl"
                    >
                        I build
                        <span className="text-gold"> software</span> that
                        solves real-world problems.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/65"
                    >
                        I design and develop web applications and digital
                        systems that help organisations and businesses work
                        smarter, serve their users better, and turn ideas into
                        working products.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="mt-9 flex flex-wrap justify-center gap-4"
                    >
                        <a
                            href="#portfolio"
                            className="rounded-md bg-gold px-7 py-4 font-bold text-ink transition hover:opacity-90"
                        >
                            View my portfolio
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="mt-14 flex flex-wrap justify-center gap-3 text-sm text-white/50"
                    >
                        {[
                            'Software Development',
                            'Web Applications',
                            'UI/UX & Frontend',
                            'Backend & APIs',
                        ].map((skill) => (
                            <span
                                key={skill}
                                className="rounded-full border border-white/10 px-4 py-2"
                            >
                                {skill}
                            </span>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}